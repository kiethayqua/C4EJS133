// tạo biến age với giá trị tuổi của bạn

let age = 19;

// tạo biến name với giá trị là tên của bạn

let name = "Ng V K";

// tạo biến greeting với giá trị là "Hello, My name is <name>, <age> years old!", in ra kết quả

let greeting = `Hello, My name is ${name}, ${age} years old!`;
console.log(greeting);

// Kiểm tra trong biến greeting có tồn tại từ "Hello" hay không, không phân biệt chữ hoa chữ thường, in ra kết quả

console.log(greeting.toUpperCase().includes("Hello".toUpperCase()));

// Tạo biến sayHi thay thể "Hello" trong greeting thành "Hi", in ra màn hình

let sayHi = greeting.replace("Hello","Hi");
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

let edge = 10;
console.log(`Area of square with edge equal to ${edge} is ${edge * edge}`);

/*
Viết cấu trúc điều kiện kiểm tra độ tuổi lái xe với điều kiện sau: 
- Nếu lớn hơn hoặc bằng 18 tuổi in ra màn hình: "Bạn đã đủ tuổi lái xe"
- Nếu nhỏ hơn 18 tuổi in ra màn hình: "Bạn chưa đủ tuổi lái xe"
*/

if (age >= 18) 
    console.log(`Bạn đã đủ tuổi lái xe`);
else 
    console.log(`Bạn chưa đủ tuổi lái xe`);

/*
Viết cấu trúc switch-case kiểm tra số chẳn và lẻ
*/

let x = 5;
switch (x & 1) {
    case 0:
        console.log(`${x}: số chẳn`);
        break;
    case 1:
        console.log(`${x}: số lẻ`);
        break;
}
