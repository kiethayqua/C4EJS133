const ITEMS = [{
    id: 0,
    title: 'Mô hình Kimetsu No Yaiba figure Demon Slayer Agatsuma Zenitsu cao 16 cm - figure thanh gươm diệt quỷ',
    image: 'https://cf.shopee.vn/file/124a8a430211ad5aa26e087ccbd45796_tn',
    price: 59000,
    sold: 2500,
},
{
    id: 2,
    title: 'Mô hình Kimetsu No Yaiba figure Demon Slayer Agatsuma Zenitsu cao 16 cm - figure thanh gươm diệt quỷ',
    image: 'https://cf.shopee.vn/file/124a8a430211ad5aa26e087ccbd45796_tn',
    price: 59000,
    sold: 2500,
},
{
    id: 3,
    title: 'Mô hình Kimetsu No Yaiba figure Demon Slayer Agatsuma Zenitsu cao 16 cm - figure thanh gươm diệt quỷ',
    image: 'https://cf.shopee.vn/file/124a8a430211ad5aa26e087ccbd45796_tn',
    price: 59000,
    sold: 2500,
},
{
    id: 4,
    title: 'Mô hình Kimetsu No Yaiba figure Demon Slayer Agatsuma Zenitsu cao 16 cm - figure thanh gươm diệt quỷ',
    image: 'https://cf.shopee.vn/file/124a8a430211ad5aa26e087ccbd45796_tn',
    price: 59000,
    sold: 2500,
},
{
    id: 5,
    title: 'Mô hình Kimetsu No Yaiba figure Demon Slayer Agatsuma Zenitsu cao 16 cm - figure thanh gươm diệt quỷ',
    image: 'https://cf.shopee.vn/file/124a8a430211ad5aa26e087ccbd45796_tn',
    price: 59000,
    sold: 2500,
},
{
    id: 6,
    title: 'Mô hình Kimetsu No Yaiba figure Demon Slayer Agatsuma Zenitsu cao 16 cm - figure thanh gươm diệt quỷ',
    image: 'https://cf.shopee.vn/file/124a8a430211ad5aa26e087ccbd45796_tn',
    price: 59000,
    sold: 2500,
},
{
    id: 7,
    title: 'Mô hình Kimetsu No Yaiba figure Demon Slayer Agatsuma Zenitsu cao 16 cm - figure thanh gươm diệt quỷ',
    image: 'https://cf.shopee.vn/file/124a8a430211ad5aa26e087ccbd45796_tn',
    price: 59000,
    sold: 2500,
},
{
    id: 8,
    title: 'Mô hình Kimetsu No Yaiba figure Demon Slayer Agatsuma Zenitsu cao 16 cm - figure thanh gươm diệt quỷ',
    image: 'https://cf.shopee.vn/file/124a8a430211ad5aa26e087ccbd45796_tn',
    price: 59000,
    sold: 2500,
},
{
    id: 9,
    title: 'Mô hình Kimetsu No Yaiba figure Demon Slayer Agatsuma Zenitsu cao 16 cm - figure thanh gươm diệt quỷ',
    image: 'https://cf.shopee.vn/file/124a8a430211ad5aa26e087ccbd45796_tn',
    price: 59000,
    sold: 2500,
},
{
    id: 10,
    title: 'Mô hình Kimetsu No Yaiba figure Demon Slayer Agatsuma Zenitsu cao 16 cm - figure thanh gươm diệt quỷ',
    image: 'https://cf.shopee.vn/file/124a8a430211ad5aa26e087ccbd45796_tn',
    price: 59000,
    sold: 2500,
},
]

const List = document.getElementById('todo-list')
ITEMS.forEach(item=>{
    numsold =  Math.abs(item.sold) > 999 ? Math.sign(item.sold)*((Math.abs(item.sold)/1000).toFixed(1)) + 'k' : Math.sign(item.sold)*Math.abs(item.sold)
   List.innerHTML +=`
   <li class="todo-item">
   <img src="${item.image}" alt="">
   <span>${item.title}</span>
   <div class="price">
       <span>₫${item.price}</span>
       <div class="sold">Đã bán ${numsold}</div>
   </div>
   <div class="cart-hover">
   <span>Tìm sản phẩm tương tự</span>
 </div>
</li>
   ` 
})