// const ITEMS = {
//     {
//         id: 0,
//         title: 'Túi đeo chéo nữ...',
//         image: '<url >'
//         price: 60000,
//         sold: 2500
//     },
//     {
//         id: 0,
//         title: 'Túi đeo chéo nữ...',
//         image: '<url >'
//         price: 60000,
//         sold: 2500
//     },
// {
//         id: 0,
//         title: 'Túi đeo chéo nữ...',
//         image: '<url >'
//         price: 60000,
//         sold: 2500
//     },
// {
//         id: 0,
//         title: 'Túi đeo chéo nữ...',
//         image: '<url >'
//         price: 60000,
//         sold: 2500
//     },
// }

const ITEMS = [
    {
        id: 0,
        title: "I will wake up at 8 in the morning",
    },
    {
        id: 0,
        title: "I will eat at 9 in the morning",
    },
    {
        id: 0,
        title: "I will break at 10 in the morning",
    },
];

const list = document.getElementById("todo-list");

function createItemList(item) {
    const img = document.createElement("img");
    img.style.width = "24px";
    img.style.height = "24px";
    img.alt = "icon";
    img.src = "icons8-trash-can-50.png";

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("dlt-btn", "center");
    imgWrapper.appendChild(img);
}
