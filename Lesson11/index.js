let data = [
    {
        id: 0,
        content: 'Coding',
        isDone: true
    },
    {
        id: 1,
        content: 'Eating',
        isDone: false
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
    data.push({ id, content: 'abvcajfjsalf', isDone: false });
    renderList();
});


list.addEventListener('click', (e) => {
    const findedItem = data.find((i) => `${i.id}` === `${e.target.value}`);
    if (findedItem) {
        findedItem.isDone = !findedItem.isDone;
        renderList();
    }
});