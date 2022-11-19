// Bài 1: In ra màn hình các số từ 1..100 theo thứ tự tăng dần
console.log("====E1====");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
// Bài 2: In ra màn hình các số từ 1..100 theo thứ tự giảm dần
console.log("====E2====");
for (let i = 100; i >= 0; i--) {
    console.log(i);
}

// Bài 3: Cho số nguyên n bất kì, in các số chẵn từ 1..n
console.log("====E3====");
const printEven0toN = (n) => {
    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
}
printEven0toN(19);

// Bài 4: Cho số nguyên n bất kì, in các số lẻ từ 1..n
console.log("====E4====");
const printOdd0toN = (n) => {
    for (let i = 1; i <= n; i += 2) {
        console.log(i);
    }
}
printOdd0toN(22);
// Bài 5: Cho số nguyên n bất kì, tính tổng các số từ 1..n
console.log("====E5====");
const calcSum = (n) => {
    let tol = 0;
    for (let i = 1; i <= n; i++) {
        tol += i;
    }
    return tol;
}
console.log(calcSum(100));
// Bài 6: Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).
console.log("====E6====");
const calcS = (n) => {
    let tol = 0;
    for (let i = 1; i <= n; i++) {
        tol += i * (i + 1);
    }
    return tol;
}
console.log(calcS(10));
// Bài 7: Cho các số nguyên n và m bất kì, tính n^m VD: 2^3 = 8
console.log("====E7====");
const calcPow = (n, m) => {
    let tol = 1;
    for (let i = 1; i <= m; i++) {
        tol *= n;
    }
    return tol;
}
console.log(calcPow(4, 3));
// Bài 8: Cho số nguyên n bất kì, tính n! VD: 3! = 1*2*3 = 6
console.log("====E8====");
const fact = (n) => (n == 0)? 1 : n * fact(n - 1);
console.log(fact(4));
// Bài 9: Vẽ tam giác có dạng sau:
// *****
// ****
// ***
// **
// *
console.log("====E9====");
const drawTri = (n) => {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += "*";
    }
    while (s.length != 0) {
        console.log(s);
        s = s.slice(0, s.length - 1);
    }
}
drawTri(10);

// Bài 10: Xây dựng chương trình game đoán số từ 0..9(số được random)
// - Cho phép nhập từ trình duyệt với nội dung - 'Nhập số: '
// - Mỗi lần đoán sai, thông báo và cho nhập lại - 'Bạn đã đoán sai! Thử lại: '
// - Trò chơi kết thúc khi đoán đúng số được random
// - In ra kết qủa và số lần đã đoán
// VD: 
// Bạn đã đoán đúng!
// Số được chọn là: <number>
// Số lần bạn đoán là: <number>
console.log("====E10====");
const guessGame = () => {
    let ans = Math.floor(10*Math.random());
    let tries = 1;

    let input = prompt(`Guess 0-9`);
    if (input == ans) {
        alert(`You're right!\nThe answer is: ${ans}\nTotal tries: ${tries}`);
        return;
    }

    while (true) {
        let  input = prompt(`Wrong guess, try again: `);
        tries++;
        if (input == ans) {
            alert(`You're right!\nThe answer is: ${ans}\nTotal tries: ${tries}`);
            break;
        }
    }
}
guessGame();






