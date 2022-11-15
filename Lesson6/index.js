// tạo biến age với giá trị tuổi của bạn
let age = 19;
// tạo biến name với giá trị là tên của bạn
let name = 'Gia';
// tạo biến greeting với giá trị là "Hello, My name is <name>, <age> years old!", in ra kết quả
let greeting = `Hello, My name is ${name}, ${age} years old!`
console.log(greeting);
// Kiểm tra trong biến greeting có tồn tại từ "Hello" hay không, không phân biệt chữ hoa chữ thường, in ra kết quả
let result = greeting.includes("Hello");
console.log(result);
// Tạo biến sayHi thay thể "Hello" trong greeting thành "Hi", in ra màn hình
let sayHi = greeting.replace('Hello', 'Hi');
console.log(sayHi);
/*
Tạo biến mark = 9.7 và thực hiện:
- Làm tròn thành 10 và in ra
- Làm tròn về 9 và in ra
*/
let mark = 9.7;
let mark10 = Math.round(9.7);
let mark9 = Math.floor(mark);
console.log(mark10);
console.log(mark9);
// Tạo 1 biến lưu độ dài cạnh của hình vuông và tính diện tích hình vuông đó sau đó in ra màn hình
let a = 4;
console.log(a * a);
/*
Viết cấu trúc điều kiện kiểm tra độ tuổi lái xe với điều kiện sau: 
- Nếu lớn hơn hoặc bằng 18 tuổi in ra màn hình: "Bạn đã đủ tuổi lái xe"
- Nếu nhỏ hơn 18 tuổi in ra màn hình: "Bạn chưa đủ tuổi lái xe"
*/

let checkAge = (age > 18) ? 'Bạn đã đủ tuổi lái xe' : 'Bạn chưa đủ tuổi lái xe';
console.log(checkAge);


/*
Viết cấu trúc switch-case kiểm tra số chẳn và lẻ
*/
let x = 1011;
var check;
switch (x % 2) {
    case 0:
        check = 'chẵn'
        break;
    default:
        check = 'lẻ'
    // code block
}
console.log(check); 