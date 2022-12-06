const tasks = [
    {
        content: 'JavaScript Exercises: Array + String JavaScript Exercises: Array + String JavaScript Exercises: Array + String JavaScript Exercises: Array + String JavaScript Exercises: Array + String',
        id: 1,
        isDone: true
    },
    {
        content: 'Buy lunch',
        id: 2,
        isDone: false
    },
    {
        content: 'Cpp: OOP + String',
        id: 3,
        isDone: true
    },
    {
        content: 'Buy teddy bear',
        id: 4,
        isDone: false
    }
];

let taskCnt = 4;
const view = document.getElementById('task-view');
let form = document.getElementById('task-generator');
let formInput = document.getElementById('form-content');
let filterNoneBtn = document.getElementById('all-task');
let filterDoneBtn = document.getElementById('done-task');
let filterNotDoneBtn = document.getElementById('not-done-task');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted');

    formValidation();
});

const formValidation = () => {
    if (formInput.value === "") {
        alert('Task cannot be empty!');
    }
    else {
        console.log('validated');
        addTask();
        console.log(tasks);
    }
}

const addTask = () => {
    let newTask = {};
    newTask['content'] = formInput.value;
    newTask['isDone'] = false;
    newTask['id'] = ++taskCnt;
    console.log(newTask);
    tasks.push(newTask);
    // loadNewTask(newTask);
    filterNoneBtn.checked = true;
    loadAllTask(tasks);
}

// Code nay dang bi loi e hong bit tai sao huhu

// const addCheckEvent = (taskContainer) => {
//     console.log(taskContainer);
//     let checkBox = taskContainer.querySelector(`#${taskContainer.id} input`);
//     checkBox.addEventListener('click', (e) => {
//         let id = taskContainer.id.slice(5);
//         console.log(id);
//         if (checkBox.checked) {
//             taskContainer.querySelector(`#${taskContainer.id} p`).classList.add('doneTask');
//         }
//         else {
//             taskContainer.querySelector(`#${taskContainer.id} p`).classList.remove('doneTask');
//         }
//         tasks[id - 1]['isDone'] = !tasks[id - 1]['isDone'];
//         console.log('added');
//         console.log(tasks[id - 1]);
//     });
// }

const addHTMLElement = (task) => {
    view.innerHTML += `
    <div class="task-wrapper">
        <div class="task-container" id="task-${task.id}">
            <input type="checkbox" class="isDone" ${(task.isDone)? 'checked' : ''}>
            <p class="${(task.isDone)? "doneTask" : ""}">${task.content}</p>
            <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
        </div>
    </div>
    `;
    // let taskContainer = document.getElementById(`task-${task.id}`);
    // addCheckEvent(taskContainer);
}

const loadAllTask = (tasks) => {
    // Reset the contents
    view.innerHTML = '';
    // Render new contents
    tasks.forEach(task => {
        addHTMLElement(task);
    });

    let checkboxes = document.querySelectorAll('input[class=isDone]');
    checkboxes.forEach((checkBox) => {
        checkBox.addEventListener('change', () => {
            let taskContainer = checkBox.parentElement;
            let id = taskContainer.id.slice(5);
            if (checkBox.checked) {
                taskContainer.querySelector(`#${taskContainer.id} p`).classList.add('doneTask');
            }
            else {
                taskContainer.querySelector(`#${taskContainer.id} p`).classList.remove('doneTask');
            }
            tasks[id - 1]['isDone'] = !tasks[id - 1]['isDone'];
            console.log('task state changed');
        });
    });
}

const loadNewTask = (newTask) => {
    addHTMLElement(newTask);
    let checkboxes = document.querySelectorAll('input[class=isDone]');
    let checkBox = checkboxes[checkboxes.length - 1];
    checkBox.addEventListener('change', () => {
        let taskContainer = checkBox.parentElement;
        let id = taskContainer.id.slice(5);
        console.log(id);
        if (checkBox.checked) {
            taskContainer.querySelector(`p`).classList.add('doneTask');
        }
        else {
            taskContainer.querySelector(`p`).classList.remove('doneTask');
        }
        tasks[id - 1]['isDone'] = !tasks[id - 1]['isDone'];
        console.log('task state changed');
    });
}

const deleteTask = (e) => {
    let id = e.parentElement.id.slice(5);
    tasks.splice(id - 1, 1);
    loadAllTask(tasks);
}

filterNoneBtn.addEventListener('click', () => {
    loadAllTask(tasks);
})

filterDoneBtn.addEventListener('click', () => {
    let doneTasks = tasks.filter(task => task.isDone === true);
    loadAllTask(doneTasks);
})

filterNotDoneBtn.addEventListener('click', () => {
    let notDoneTasks = tasks.filter(task => task.isDone === false);
    loadAllTask(notDoneTasks);
})

loadAllTask(tasks);