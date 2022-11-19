// print all elements
function print(arr) {
    arr.forEach(x => console.log(x));
}

// Bài 1: In ra màn hình các số từ 1..100 theo thứ tự tăng dần
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

let arr = Array.from({ length: 100 }, (_, i) => i + 1);
print(arr);

// Bài 2: In ra màn hình các số từ 1..100 theo thứ tự giảm dần

print(arr.reverse());

// Bài 3: Cho số nguyên n bất kì, in các số chẵn từ 1..n

let n = 10;

for (let i = 1; i <= n; i++) {
    if (i & 1) continue;
    console.log(i);
}

// Bài 4: Cho số nguyên n bất kì, in các số lẻ từ 1..n

for (let i = 1; i <= n; i++)
    if (i & 1)
        console.log(i);

// Bài 5: Cho số nguyên n bất kì, tính tổng các số từ 1..n

let tmp = 0;
for (let i = 1; i <= n; i++)
    tmp += i;

console.log(tmp);

// Bài 6: Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).

tmp = 0;
for (let i = 1; i <= n; i++)
    tmp += i * (i + 1);


console.log(tmp);

// Bài 7: Cho các số nguyên n và m bất kì, tính n^m VD: 2^3 = 8
n = 2, tmp = 1;
let m = 3;

for (let i = 1; i <= m; i++)
    tmp *= n;


console.log(tmp);

// Bài 8: Cho số nguyên n bất kì, tính n! VD: 3! = 1*2*3 = 6

n = 3, tmp = 1;
for (let i = 1; i <= n; i++) tmp *= i;
console.log(tmp);

// Bài 9: Vẽ tam giác có dạng sau:
// *****
// ****
// ***
// **
// *
n = 5;
for (let i = 0; i < n; i++) {
    let tmp = "";
    for (let j = 1; j <= n - i; j++) tmp += "*";
    console.log(tmp);
}

// Bài 10: Xây dựng chương trình game đoán số từ 0..9(số được random)
// - Cho phép nhập từ trình duyệt với nội dung - 'Nhập số: '
// - Mỗi lần đoán sai, thông báo và cho nhập lại - 'Bạn đã đoán sai! Thử lại: '
// - Trò chơi kết thúc khi đoán đúng số được random
// - In ra kết qủa và số lần đã đoán
// VD: 
// Bạn đã đoán đúng!
// Số được chọn là: <number>
// Số lần bạn đoán là: <number>

let rand, tries, box;
function init() {
    rand = Math.floor(Math.random() * 10);
    tries = 0;
}

init();
function myFunction() {
    console.log(rand);

    if (tries == 0)
        box = prompt("Nhập số:");
    else
        box = prompt("Bạn đã đoán sai! Thử lại:");

    if (box != null) {
        if (box != rand) {
            document.getElementById("demo").innerHTML =
                box + " is NOT that secret number!";
            tries++;
        }
        else {
            let ans = `Bạn đã đoán đúng!<br>` +
                `Số được chọn là: ${rand}<br>` +
                `Số lần bạn đoán là: ${tries + 1}<br>`;
            document.getElementById("demo").innerHTML = ans;
            init();
        }
    }
}






