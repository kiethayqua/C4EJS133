let data = [
    {
        id: 0,
        content: 'Coding',
        isDone: true,
    }
];

const list = document.getElementById('list');

function renderList() {
    let listContent = '';
    data.forEach((i) => {
        listContent += `
        <input type="checkbox" ${i.isDone ? 'checked' : ''} id="${i.id}" name="selectedItem" value="${i.id}">
        <label class=${i.isDone ? "done" : "\"\""} for="${i.id}">${i.content}</label><br>
        `
    });
    list.innerHTML = listContent;
}

renderList();

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
    const id = new Date().getTime().toString();
    let x = document.getElementById('task_name').value;
    data.push({ id, content: x, isDone: false });
    renderList();
});

const allbtn = document.getElementById('all-btn');
allbtn.addEventListener('click', () => {
    data.forEach(Element => Element.isDone = true);
    renderList();
});

const notdonebtn = document.getElementById('not-done-btn');
notdonebtn.addEventListener('click', () => {
    data.forEach(Element => {
        if(Element.isDone == true){
            Element.isDone = false;
        }
    });
    renderList();
});

const donebtn = document.getElementById('done-btn');
donebtn.addEventListener('click', () => {
    let temp = [];
    data.forEach(Element => {
        if(Element.isDone == false){
            temp.push(Element);
        }
    });
    data = [];
    temp.forEach(Element =>{
        data.push(Element);
    });
    console.log(data);
    console.log(temp);
    renderList();
});

list.addEventListener('click', (e) => {
    const findedItem = data.find((i) => `${i.id}` === `${e.target.value}`);
    if (findedItem) {
        findedItem.isDone = !findedItem.isDone;
        renderList();
    }
});
