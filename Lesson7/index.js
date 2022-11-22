// Bài 1: In ra màn hình các số từ 1..100 theo thứ tự tăng dần
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// Bài 2: In ra màn hình các số từ 1..100 theo thứ tự giảm dần
// for (let i = 100; i > 0; i--) {
//     console.log(i);
// }

// Bài 3: Cho số nguyên n bất kì, in các số chẵn từ 1..n
let n = 10;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) console.log(i);
// }

// Bài 4: Cho số nguyên n bất kì, in các số lẻ từ 1..n
// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 1) console.log(i);
// }

// Bài 5: Cho số nguyên n bất kì, tính tổng các số từ 1..n
// n = 4;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(sum);

// Bài 6: Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).
// n = 4;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i * (i + 1);
// }
// console.log(sum);

// Bài 7: Cho các số nguyên n và m bất kì, tính n^m VD: 2^3 = 8
// n = 2;
// let m = 3;
// let result = 1;
// result = 1 * 2 (loop1)
// result = 1 * 2 * 2 (loop2)
// result = 1 * 2 * 2 * 2 (loop3)

// for (let i = 0; i < m; i++) {
//     result *= n;
// }
// console.log(result);

// Bài 8: Cho số nguyên n bất kì, tính n! VD: 3! = 1*2*3 = 6
// n = 3;
// let result = 1;
// result = 1 * 1 (loop1)
// result = 1 * 1 * 2 (loop2)
// result = 1 * 1 * 2 * 3 (loop3)
// for (let i = 1; i <= n; i++) {
//     result = result * i;
// }
// console.log(result);

// Bài 9: Vẽ tam giác có dạng sau:
// *****
// ****
// ***
// **
// *
function printStars(n) {
    for (let i = n; i > 0; i--) {
        let stars = '';
        for (let j = i; j > 0; j--) {
            stars += '*';
        }
        console.log(stars);
    }
}
printStars(5);


// Bài 10: Xây dựng chương trình game đoán số từ 0..9(số được random)
// - Cho phép nhập từ trình duyệt với nội dung - 'Nhập số: '
// - Mỗi lần đoán sai, thông báo và cho nhập lại - 'Bạn đã đoán sai! Thử lại: '
// - Trò chơi kết thúc khi đoán đúng số được random
// - In ra kết qủa và số lần đã đoán
// VD: 
// Bạn đã đoán đúng!
// Số được chọn là: <number>
// Số lần bạn đoán là: <number>
let guessCount = 0;
const randomNum = Math.floor(Math.random() * 10);
let guessNum = Number(prompt('Nhập số: '));
guessCount++;

while (guessNum !== randomNum) {
    guessNum = Number(prompt('Bạn đã đoán sai! Thử lại: '));
    guessCount++;
}

alert(`
    Bạn đã đoán đúng!
    Số được chọn là: ${randomNum}
    Số lần bạn đoán là: ${guessCount}
`)

function factorial(x){
    if(x === 0 ){
        return 1;
    }

    else{
        return x*factorial(x-1);
    }
}
const num = 3;
if(num > 0){
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}

// array
const list = [];
const integer = [1,2, 4, 3];
const stringArray = [`eat`, `work`, `sleep`];

//mix data type;

const newData = [`work`, `exercises`, 1, true]


console.log(integer[0])
console.log(list[0]);

console.log(newData[0]);
console.log(newData[3]);