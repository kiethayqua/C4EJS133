let data = [
    {
        id: 0,
        content: 'Coding',
        isDone: true
    },
    {
        id: 1,
        content: 'Eating',
        isDone: false,

    }
    ,
    {
        id: 2,
        content: 'Wakeup',
        isDone: false,

    },
    {
        id: 3,
        content: 'Homework',
        isDone: false,

    }
    ,
    {
        id: 4,
        content: 'Shower',
        isDone: false,

    }
];

const list = document.getElementById('list-checked')
function renderList() {
    let listContent = '';
    data.forEach((i) => {
        listContent += `
<div class="check-wrapper">
<div class="wrapper-info">
<input type="checkbox" ${i.isDone ? 'checked' : ''} name="seclectedItem" id="${i.id}" value="${i.id}">
<label id="label-text"  class=${i.isDone ? "done" : "\"\""} for="${i.id}">${i.content}</label>
</div>
<button  id="btn-delete" class="btn-delete">Xóa</button>
</div>
`
    })
    list.innerHTML = listContent;
}
renderList();

const addBtn = document.getElementById('btn-submit');
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const id = new Date().getTime().toString();  
    const input = document.getElementById("probleminput").value
    data.push({ id, content: input, isDone: false });
    if (input == '') {
        alert('Please enter the book');
        return;
    }
    renderList();
});
list.addEventListener('click', (e) => {
    const findedItem = data.find((i) => `${i.id}` === `${e.target.value}`);
    if (findedItem) {
        findedItem.isDone = !findedItem.isDone;
        renderList();
    }
});

// delete 
list.addEventListener('click', (e) => {
    if (e.target.className == 'btn-delete') {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    } 
});
