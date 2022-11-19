// Bài 1: In ra màn hình các số từ 1..100 theo thứ tự tăng dần
let a = []
for(var i = 1;i<=100;i++){
    a.push(i);
}
console.log(a);
// Bài 2: In ra màn hình các số từ 1..100 theo thứ tự giảm dần
console.log(a.reverse())
// Bài 3: Cho số nguyên n bất kì, in các số chẵn từ 1..n
let n = 100;
let arr = []
for(var i = 1;i<=n/2;i++){
    arr.push(i);
}
let ans3 = []
arr.forEach(element => ans3.push(element * 2))
console.log(ans3)
// Bài 4: Cho số nguyên n bất kì, in các số lẻ từ 1..n
let ans4 = []
arr.forEach(element => ans4.push(element * 2 - 1))
console.log(ans4)
// Bài 5: Cho số nguyên n bất kì, tính tổng các số từ 1..n
let arr2 = []
for(var i = 1;i<=n;i++){
    arr2.push(i);
}
let sum5 = 0;
arr2.forEach(element => sum5 += element)
console.log(sum5)
// Bài 6: Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).
let sum6 = 0;
arr2.forEach(element => sum6 += element * (element + 1))
console.log(sum6)
// Bài 7: Cho các số nguyên n và m bất kì, tính n^m VD: 2^3 = 8
let N = 5;
let M = 6;
let ans7 = 1;
for(var i = 1;i<=M;i++){
    ans7 *= N;
}
console.log(ans7)
// Bài 8: Cho số nguyên n bất kì, tính n! VD: 3! = 1*2*3 = 6
let inte = 4;
let ans8 = 1;
for(var i = 1;i<=inte;i++){
    ans8 *= i;
}
console.log(ans8);
// Bài 9: Vẽ tam giác có dạng sau:
// *****
// ****
// ***
// **
// *
const x = 5
for(var i = x; i > 0 ;i --){
    let a = new String()
    for(var j=0;j<i;j++){
        a += '*'
    }
    console.log(a)
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
let guess = Math.floor(Math.random() * 10)
console.log(guess)
let count = 0;
while(true){
    let x = prompt("Nhập số: ")
    count++;
    if(x == guess){
        break;
    }
    else{
        alert("Bạn đã đoán sai! Thử lại: ")
    }
}
let sen1 = `Số đúng là: ${guess}
Số lần đoán là: ${count}`
alert(sen1)







