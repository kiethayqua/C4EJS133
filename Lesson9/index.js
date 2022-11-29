const ITEMS = [
    {
        id: 0,
        title: `Túi đeo chéo nữ ,túi xách nữ phong cách hàn quốc quai nhúm`,
        price: 69000,
        image: `https://cf.shopee.vn/file/sg-11134201-22110-e0r3m723xcjv06_tn`,
        sold: 695
        
    },
    {
        id: 1,
        title: `Ô Trong Suốt Đi Mưa`,
        price: 69000,
        image: `https://cf.shopee.vn/file/17c17e67fd2f40be0fe3b5ae5e79d7b6_tn`,
        sold: 1420
    },
    {
        id: 3,
        title: `Ruột Gối Đầu Cao Cấp Pillow Nhiều Màu Tiêu Chuẩn 5* Kích Thước 45x65cm`,
        price: 29000,
        image: `https://cf.shopee.vn/file/6258a027f02126c068460b5438184b2c_tn`,
        sold: 4160
    },
    {
        id: 4,
        title: `Ốp Điện Thoại Nhựa Dẻo In Logo Thương Hiệu Cho iPhone 11 / 12 / 13 Promax 6 / 7 / 8 Plus / X / XR / Xs Max`,
        price: 26000,
        image: `https://cf.shopee.vn/file/0ac5414d9b61d021e09e2732624ab13a_tn`,
        sold: 220
    },
    {
        id: 5,
        title: `Ốp Điện Thoại Nhựa Dẻo In Logo Thương Hiệu Cho iPhone 11 / 12 / 13 Promax 6 / 7 / 8 Plus / X / XR / Xs Max`,
        price: 26000,
        image: `https://cf.shopee.vn/file/0ac5414d9b61d021e09e2732624ab13a_tn`,
        sold: 220
    },
    {
        id: 6,
        title: `Ốp Điện Thoại Nhựa Dẻo In Logo Thương Hiệu Cho iPhone 11 / 12 / 13 Promax 6 / 7 / 8 Plus / X / XR / Xs Max`,
        price: 26000,
        image: `https://cf.shopee.vn/file/0ac5414d9b61d021e09e2732624ab13a_tn`,
        sold: 220
    },
    {
        id: 0,
        title: `Túi đeo chéo nữ ,túi xách nữ phong cách hàn quốc quai nhúm`,
        price: 69000,
        image: `https://cf.shopee.vn/file/sg-11134201-22110-e0r3m723xcjv06_tn`,
        sold: 695
        
    },
    {
        id: 1,
        title: `Ô Trong Suốt Đi Mưa`,
        price: 69000,
        image: `https://cf.shopee.vn/file/17c17e67fd2f40be0fe3b5ae5e79d7b6_tn`,
        sold: 1420
    },
    {
        id: 3,
        title: `Ruột Gối Đầu Cao Cấp Pillow Nhiều Màu Tiêu Chuẩn 5* Kích Thước 45x65cm`,
        price: 29000,
        image: `https://cf.shopee.vn/file/6258a027f02126c068460b5438184b2c_tn`,
        sold: 4160
    },
    {
        id: 4,
        title: `Ốp Điện Thoại Nhựa Dẻo In Logo Thương Hiệu Cho iPhone 11 / 12 / 13 Promax 6 / 7 / 8 Plus / X / XR / Xs Max`,
        price: 26000,
        image: `https://cf.shopee.vn/file/0ac5414d9b61d021e09e2732624ab13a_tn`,
        sold: 220
    },
    {
        id: 5,
        title: `Ốp Điện Thoại Nhựa Dẻo In Logo Thương Hiệu Cho iPhone 11 / 12 / 13 Promax 6 / 7 / 8 Plus / X / XR / Xs Max`,
        price: 26000,
        image: `https://cf.shopee.vn/file/0ac5414d9b61d021e09e2732624ab13a_tn`,
        sold: 220
    },
    {
        id: 6,
        title: `Ốp Điện Thoại Nhựa Dẻo In Logo Thương Hiệu Cho iPhone 11 / 12 / 13 Promax 6 / 7 / 8 Plus / X / XR / Xs Max`,
        price: 26000,
        image: `https://cf.shopee.vn/file/0ac5414d9b61d021e09e2732624ab13a_tn`,
        sold: 220
    }
]

const list = document.getElementById('container');
const divlist = document.createElement('div');
divlist.classList.add('item_list');
list.append(divlist);

function createItemList(item) {

    // create img element
    const img = document.createElement('img');
    img.style.width = '100%';
    img.style.height = 'auto';
    img.alt = 'image';
    img.src = item.image;

    // create span 
    const title = document.createElement('span');
    title.innerHTML = item.title;

    // create div
    const div = document.createElement('div');
    div.classList.add('item');
    div.appendChild(img);
    div.append(title);

    // create bottom div
    const divS = document.createElement('div');

    // create 2 span text
    const price = document.createElement('span');
    price.innerHTML = `đ${item.price}`;

    const sold = document.createElement('span');
    sold.innerHTML = `đã bán ${item.sold}`;

    divS.append(price);
    divS.append(sold);
    divS.classList.add('item--bottom');

    div.append(divS);

    divlist.appendChild(div);
}

ITEMS.forEach(item => {
    createItemList(item);
});