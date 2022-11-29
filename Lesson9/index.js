const ITEMS = [
    {
        id: 0,
        title: "Giày đá banh",
        image: "https://cf.shopee.vn/file/ddc96d697e5dd44c5b53a55a1c39aee2_tn",
        price: 60000,
        sold: 2500,
    },
    {
        id: 1,
        title: "Tai nghe chụp tai không dây bluetooth STN28 màu sắc... ",
        image: "https://cf.shopee.vn/file/f2f227a59f6a5fb1eb1dc2893057aeab_tn",
        price: 60000,
        sold: 2500,
    },
    {
        id: 2,
        title: "Đèn ngủ cảm biến ánh sáng, tự động bật tắt...",
        image: "https://cf.shopee.vn/file/ce792ad0695f70a5065be0e10708b63a_tn",
        price: 60000,
        sold: 2500,
    },
    {
        id: 3,
        title: "Máy hút bụi mini cầm tay chuyên dùng....",
        image: "https://cf.shopee.vn/file/sg-11134201-22110-t7pga3ubcvjvbb_tn",
        price: 60000,
        sold: 2500,
    },
    {
        id: 4,
        title: "Túi đựng tài liệu DecorMe tệp đựng tài liệu nhiều ngăn kẹp....",
        image: "https://cf.shopee.vn/file/sg-11134201-22110-n18r8iw3cfkve5_tn",
        price: 60000,
        sold: 2500,
    },
    {
        id: 5,
        title: "Ốp lưng PVC cạnh vuông giả 14 pug love 5 6...",
        image: "https://cf.shopee.vn/file/5cabe75a4aba13d21bf1dea2e9c036ec_tn",
        price: 60000,
        sold: 2500,
    },
];

// const ITEMS = [
//     {
//         id: 0,
//         title: "I will wake up at 8 in the morning",
//     },
//     {
//         id: 0,

//         title: "I will eat at 9 in the morning",
//     },
//     {
//         id: 0,
//         title: "I will break at 10 in the morning",
//     },
// ];

// const list = document.getElementById("todo-list");

// function createItemList(item) {
//     const img = document.createElement("img");
//     img.style.width = "24px";
//     img.style.height = "24px";
//     img.alt = "icon";
//     img.src = "icons8-trash-can-50.png";

//     const imgWrapper = document.createElement("div");
//     imgWrapper.classList.add("dlt-btn", "center");
//     imgWrapper.appendChild(img);
// }

const list = document.getElementById("container");

function createItemList(item) {
    const shopItem = document.createElement("div");
    shopItem.classList.add("shopping-item");

    const img = document.createElement("img");
    img.alt = "shop-item";
    img.src = `${item.image}`;

    const infoWrapper = document.createElement("div");
    infoWrapper.classList.add("item-info");

    const title = document.createElement("p");
    title.innerHTML = item.title;

    const price = document.createElement("p");
    price.classList.add("price");
    price.innerHTML = `${item.price}`;

    const sold = document.createElement("p");
    sold.classList.add("sold");
    sold.innerHTML = `Đã bán ${item.sold}`;

    const sellList = document.createElement("div");
    sellList.classList.add("sell-list");
    sellList.appendChild(price);
    sellList.appendChild(sold);

    infoWrapper.appendChild(title);
    infoWrapper.appendChild(sellList);

    shopItem.appendChild(img);
    shopItem.appendChild(infoWrapper);

    infoWrapper.appendChild(title);
    infoWrapper.appendChild(sellList);

    list.appendChild(shopItem);
}

ITEMS.forEach((item) => {
    createItemList(item);
});
