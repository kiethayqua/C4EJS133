// tạo biến age với giá trị tuổi của bạn
let age = 19;
// tạo biến name với giá trị là tên của bạn
let name = "Duy";
// tạo biến greeting với giá trị là "Hello, My name is <name>, <age> years old!", in ra kết quả
let greeting = `Hello, My name is ${name}, ${age} years old!`;
console.log(greeting);
// console.log(greeting.length);
// Kiểm tra trong biến greeting có tồn tại từ "Hello" hay không, không phân biệt chữ hoa chữ thường, in ra kết quả
let grtL = greeting.toLowerCase();
let helloFound = grtL.includes("hello".toLowerCase());
if (helloFound) {
    console.log("There's 'Hello' in the string")
}
else {
    console.log("There's no 'Hello' in the string")
}
// Tạo biến sayHi thay thể "Hello" trong greeting thành "Hi", in ra màn hình
let sayHi = greeting.replace("Hello", "Hi");
console.log(sayHi);
/*
Tạo biến mark = 9.7 và thực hiện:
- Làm tròn thành 10 và in ra
- Làm tròn về 9 và in ra
*/
let mark = 9.7;
console.log(Math.ceil(mark));
console.log(Math.floor(mark));
// Tạo 1 biến lưu độ dài cạnh của hình vuông và tính diện tích hình vuông đó sau đó in ra màn hình
let side = 5;
console.log(`The area of the square of size ${side} is ${side ** 2}`);
/*
Viết cấu trúc điều kiện kiểm tra độ tuổi lái xe với điều kiện sau: 
- Nếu lớn hơn hoặc bằng 18 tuổi in ra màn hình: "Bạn đã đủ tuổi lái xe"
- Nếu nhỏ hơn 18 tuổi in ra màn hình: "Bạn chưa đủ tuổi lái xe"
*/
let personAge = 18;
if (personAge >= 18) {
    console.log(`You are eligible to drive, since you're ${personAge}.`);
} else {
    console.log(`You are NOT eligible to drive, because you're only ${personAge}.`);
}
/*
Viết cấu trúc switch-case kiểm tra số chẳn và lẻ
*/
let x = 121010;
switch (x % 2) {
    case 1:
        console.log(`${x} is odd.`);
        break;
    default:
        console.log(`${x} is even.`);
        break;
}