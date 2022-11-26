let data = [
    {
        img: "https://cf.shopee.vn/file/7ea1f31158222820f78c30a66c151888_tn",
        title: "Túi đeo chéo nữ - Túi Xách Cao Cấp Nữ Đeo Chéo thời trang...",
        price: 59000,
        deal: "",
        sold: 2500
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJN66lqAeSpmX6ZhdbppNM8f4_71hzIiSWA&usqp=CAU",
        title: "[Mã BMLTM300 giảm đến 300K] Sách - Dưỡng tâm già...",
        price: 49000,
        deal: "10% Giảm",
        sold: 923
    },
    {
        img: "https://cf.shopee.vn/file/e69694081b5d31ba9ccdd6b8c71f3c60_tn",
        title: "[Mã ALLSKAM2311 giảm 20K đơn 0Đ] FREESHIP Dép Sục...",
        price: 55500,
        deal: "",
        sold: 16700
    },
    {
        img: "https://cf.shopee.vn/file/55c1f54f43b0416b5530bb230b55976c_tn",
        title: "Quần ống rộng nam nữ Unisex, quần dài cạp chun có dây rút...",
        price: 19404,
        deal: "Flash Sale",
        sold: 2800
    },
    {
        img: "https://cf.shopee.vn/file/9fbddeaf66b8e9a2d49bcc36a516c0dd_tn",
        title: "[Mã ELHA9 giảm 15% đơn 50K] SẠC CỰC NHANH - PIN...",
        price: 50000,
        deal: "",
        sold: 3900
    },
    {
        img: "https://cf.shopee.vn/file/7ea1f31158222820f78c30a66c151888_tn",
        title: "Áo Hoodie Form Rộng Unisex Teelab yinxzz, Áo khoác...",
        price: 1100,
        deal: "",
        sold: 1500
    },
    {
        img: "https://cf.shopee.vn/file/7ea1f31158222820f78c30a66c151888_tn",
        title: "Túi đeo chéo nữ - Túi Xách Cao Cấp Nữ Đeo Chéo thời trang...",
        price: 59000,
        deal: "",
        sold: 2500
    },
    {
        img: "https://cf.shopee.vn/file/7ea1f31158222820f78c30a66c151888_tn",
        title: "[Mã BMLTM300 giảm đến 300K] Sách - Dưỡng tâm già...",
        price: 49000,
        deal: "Giảm đ10k",
        sold: 923
    },
    {
        img: "https://cf.shopee.vn/file/7ea1f31158222820f78c30a66c151888_tn",
        title: "[Mã ALLSKAM2311 giảm 20K đơn 0Đ] FREESHIP Dép Sục...",
        price: 55500,
        deal: "",
        sold: 16700
    },
    {
        img: "https://cf.shopee.vn/file/7ea1f31158222820f78c30a66c151888_tn",
        title: "Quần ống rộng nam nữ Unisex, quần dài cạp chun có dây rút...",
        price: 19404,
        deal: "",
        sold: 2800
    },
    {
        img: "https://cf.shopee.vn/file/7ea1f31158222820f78c30a66c151888_tn",
        title: "[Mã ELHA9 giảm 15% đơn 50K] SẠC CỰC NHANH - PIN...",
        price: 50000,
        deal: "",
        sold: 3900
    },
    {
        img: "https://cf.shopee.vn/file/7ea1f31158222820f78c30a66c151888_tn",
        title: "Áo Hoodie Form Rộng Unisex Teelab yinxzz, Áo khoác...",
        price: 1100,
        deal: "",
        sold: 1500
    }
]

let container = document.getElementById("goods-container");

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

data.forEach(goods => {
    numsold = (goods.sold > 1000)? `${goods.sold/1000}K` : `${goods.sold}`;
    container.innerHTML += `
    <div class="goods-wrapper">
        <div class="goods">
            <img src="${goods.img}">
            <div class="goods-content">
                <p class="goods-title">${goods.title}</p>
                    <div class="dealList">${goods.deal}</div>
                    <div class="priceAndSold">
                        <p class="price">đ${numberWithCommas(goods.price)}</p>
                        <p class="sold">Đã bán ${numsold}</p>
                </div>
            </div>
            <div class="goods-hover-bottom">Tìm sản phẩm tương tự</div>
        </div>
    </div>
    `;
});
