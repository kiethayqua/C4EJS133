// Bài 1: In ra màn hình các số từ 1..100 theo thứ tự tăng dần

for (let i = 1; i <= 100; i++) {
    // console.log(i)
}

// Bài 2: In ra màn hình các số từ 1..100 theo thứ tự giảm dần

for (let i = 100; i > 0; i--) {
    // console.log(i)
}

// Bài 3: Cho số nguyên n bất kì, in các số chẵn từ 1..n
let n = 20
for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        //    console.log(i);
    }
}
// Bài 4: Cho số nguyên n bất kì, in các số lẻ từ 1..n
// n = 7
// for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//            console.log(i);
//     }

// }
// Bài 5: Cho số nguyên n bất kì, tính tổng các số từ 1..n
n = 4
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;

}
// console.log(sum)  

// Bài 6: Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).
n = 4
sum = 0;
for (let i = 1; i <= n; i++) {
    sum = sum + i * (i + 1);

}
// console.log(sum)  


// Bài 7: Cho các số nguyên n và m bất kì, tính n^m VD: 2^3 = 8
n = 2
m = 3
sum = 1
for (let i = 1; i <= m; i++) {
    sum *= n

}
console.log(sum)
// Bài 8: Cho số nguyên n bất kì, tính n! VD: 3! = 1*2*3 = 6
n = 3
sum = 1;
for (let i = 1; i <= n; i++) {
    sum *= i;

}
// console.log(sum)
// Bài 9: Vẽ tam giác có dạng sau:
// *****
// ****
// ***
// **
// *
n = 5
for (let i = n; i >= 1; i--) {
    let s = ''
    for (let j = 1; j <= i; j++) {
        s = s + '*'
    }
    console.log(s)
}


// Bài 10:  q
// - Cho phép nhập từ trình duyệt với nội dung - 'Nhập số: '
// - Mỗi lần đoán sai, thông báo và cho nhập lại - 'Bạn đã đoán sai! Thử lại: '
// - Trò chơi kết thúc khi đoán đúng số được random
// - In ra kết qủa và số lần đã đoán
// VD: 
// Bạn đã đoán đúng!
// Số được chọn là: <number>
// Số lần bạn đoán là: <number>
const random = Math.floor(Math.random() * 10);
let number = Number(prompt('nhập số'));
let guesscount = 0;
guesscount++;
while (number !== random) {
    number =Number(prompt('Bạn đã đoán sai! Thử lại:'));
    guesscount++;
}
alert(`
    bạn đã đoán đúng: 
    số được chọn là : ${random}
    Số lần bạn đoán là: ${guesscount}
    ` )





