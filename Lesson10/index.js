const ITEMS = [
    {
        id: 0,
        name: 'Son bbia 25 đỏ nâu nắp đỏ hàng handmade son kem lì không chì nắp đỏ',
        image: 'https://cf.shopee.vn/file/203eb8c2f22283fe10e491ee53793eb0_tn',
        price: 10000,
        sold: 797
    },
    {
        id: 1,
        name: 'Áo thun Tealab Việt Nam , áo over size coton dày dặn- V7 Official ( V35)',
        image: 'https://cf.shopee.vn/file/e69694081b5d31ba9ccdd6b8c71f3c60_tn',
        price: 89000,
        sold: 6200
    },
    {
        id: 2,
        name: 'GIẦY THỂ THAO ĐỘN ĐẾ 7 PHÂN TĂNG CHIỀU CAO(cách chọn size phần mô tả)',
        image: 'https://cf.shopee.vn/file/c46c7195a7a4e3665b95453e6cdafebf_tn',
        price: 119000,
        sold: 10300
    },
    {
        id: 3,
        name: 'Bút Xoay Có Đèn LED Cho Học Sinh Bút quay',
        image: 'https://cf.shopee.vn/file/181063df8d932814c4a7c02b52b5ef6d_tn',
        price: 5000,
        sold: 1800
    },
    {
        id: 4,
        name: 'Strap for Watch Band 42mm Elastic Sport Silicone Solo Loop bracelet YKD',
        image: 'https://cf.shopee.vn/file/0cbe3b95de7ba1b52fae8fae3ee5a394_tn',
        price: 5000,
        sold: 5900
    },
    {
        id: 0,
        name: 'Son bbia 25 đỏ nâu nắp đỏ hàng handmade son kem lì không chì nắp đỏ',
        image: 'https://cf.shopee.vn/file/203eb8c2f22283fe10e491ee53793eb0_tn',
        price: 10000,
        sold: 797
    },
    {
        id: 1,
        name: 'Áo thun Tealab Việt Nam , áo over size coton dày dặn- V7 Official ( V35)',
        image: 'https://cf.shopee.vn/file/e69694081b5d31ba9ccdd6b8c71f3c60_tn',
        price: 89000,
        sold: 6200
    },
    {
        id: 2,
        name: 'GIẦY THỂ THAO ĐỘN ĐẾ 7 PHÂN TĂNG CHIỀU CAO(cách chọn size phần mô tả)',
        image: 'https://cf.shopee.vn/file/c46c7195a7a4e3665b95453e6cdafebf_tn',
        price: 119000,
        sold: 10300
    },
    {
        id: 3,
        name: 'Bút Xoay Có Đèn LED Cho Học Sinh Bút quay',
        image: 'https://cf.shopee.vn/file/181063df8d932814c4a7c02b52b5ef6d_tn',
        price: 5000,
        sold: 1800
    },
    {
        id: 4,
        name: 'Strap for Watch Band 42mm Elastic Sport Silicone Solo Loop bracelet YKD',
        image: 'https://cf.shopee.vn/file/0cbe3b95de7ba1b52fae8fae3ee5a394_tn',
        price: 5000,
        sold: 5900
    },
    {
        id: 0,
        name: 'Son bbia 25 đỏ nâu nắp đỏ hàng handmade son kem lì không chì nắp đỏ',
        image: 'https://cf.shopee.vn/file/203eb8c2f22283fe10e491ee53793eb0_tn',
        price: 10000,
        sold: 797
    },
    {
        id: 1,
        name: 'Áo thun Tealab Việt Nam , áo over size coton dày dặn- V7 Official ( V35)',
        image: 'https://cf.shopee.vn/file/e69694081b5d31ba9ccdd6b8c71f3c60_tn',
        price: 89000,
        sold: 6200
    },
    {
        id: 2,
        name: 'GIẦY THỂ THAO ĐỘN ĐẾ 7 PHÂN TĂNG CHIỀU CAO(cách chọn size phần mô tả)',
        image: 'https://cf.shopee.vn/file/c46c7195a7a4e3665b95453e6cdafebf_tn',
        price: 119000,
        sold: 10300
    },
    {
        id: 3,
        name: 'Bút Xoay Có Đèn LED Cho Học Sinh Bút quay',
        image: 'https://cf.shopee.vn/file/181063df8d932814c4a7c02b52b5ef6d_tn',
        price: 5000,
        sold: 1800
    },
    {
        id: 4,
        name: 'Strap for Watch Band 42mm Elastic Sport Silicone Solo Loop bracelet YKD',
        image: 'https://cf.shopee.vn/file/0cbe3b95de7ba1b52fae8fae3ee5a394_tn',
        price: 5000,
        sold: 5900
    }
];

const list = document.getElementById('list');
let finalHTML = '';

function modifyPrice(price) {
    let priceRevertArr = `${price}`.split('').reverse();
    let count = 0;
    let newArr = [];
    priceRevertArr.forEach((word) => {
        newArr.push(word);
        count++;
        if (count % 3 === 0) {
            newArr.push(',')
        }
    });
    return newArr.reverse().join('')
}

ITEMS.forEach((item) => {
    finalHTML += `
    <div class="item">
        <img class="item-image" alt="image" src="${item.image}">
        <div class="item-content">
            <div class="item-name">${item.name}</div>
            <div class="item-footer">
                <div class="item-price">đ${modifyPrice(item.price)}</div>
                <div class="item-sold">Đã bán ${item.sold}</div>
            </div>
        </div>
    </div>
    `
});

list.innerHTML = finalHTML;