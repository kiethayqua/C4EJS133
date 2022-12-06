// Faulty code

const tasks = [
    {
        content: 'JavaScript Exercises: Array + String',
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
    loadNewTask(newTask);
}

const addCheckEvent = (taskContainer) => {
    console.log(taskContainer);
    let checkBox = taskContainer.querySelector(`#${taskContainer.id} input`);
    checkBox.addEventListener('click', () => {
        let id = taskContainer.id.slice(5);
        console.log(id);
        if (checkBox.checked) {
            taskContainer.querySelector(`#${taskContainer.id} p`).classList.add('doneTask');
        }
        else {
            taskContainer.querySelector(`#${taskContainer.id} p`).classList.remove('doneTask');
        }
        tasks[id - 1]['isDone'] = !tasks[id - 1]['isDone'];
        console.log('added');
        console.log(tasks[id - 1]);
    });
}

const addHTMLElement = (task) => {
    view.innerHTML += `
    <div class="task-wrapper">
        <div class="task-container" id="task-${task.id}">
            <input type="checkbox" class="isDone" ${(task.isDone)? 'checked' : ''}>
            <p class="${(task.isDone)? "doneTask" : ""}">${task.content}</p>
        </div>
    </div>
    `;
    let taskContainer = document.getElementById(`task-${task.id}`);
    console.log(task.id);
    addCheckEvent(taskContainer);
    
    // if (task.isDone) {
    //     let newTask = document.getElementById('task-view').lastElementChild;;

    //     newTask.querySelector('p').style.textDecoration = 'line-through';
    //     newTask.querySelector('p').style.fontStyle = 'italic';
    // }
}

const loadAllTask = (tasks) => {
    // Reset the contents
    view.innerHTML = '';
    // Render new contents
    tasks.forEach(task => {
        addHTMLElement(task);
    });
}

const loadNewTask = (newTask) => {
    addHTMLElement(newTask);
}

loadAllTask(tasks);