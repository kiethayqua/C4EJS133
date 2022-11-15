// tạo biến age với giá trị tuổi của bạn
const age = 19;
// tạo biến name với giá trị là tên của bạn
const name = 'huutho';
// tạo biến greeting với giá trị là "Hello, My name is <name>, <age> years old!", in ra kết quả
let greeting = `Hello, My name is ${name}, ${age} years old!`;
console.log(greeting);
// Kiểm tra trong biến greeting có tồn tại từ "Hello" hay không, không phân biệt chữ hoa chữ thường, in ra kết quả
let check = greeting.toLowerCase();
const inp1 = prompt("Please enter: ");
const inp = String(inp1);
console.log(check.includes(inp.toLowerCase()));
// Tạo biến sayHi thay thể "Hello" trong greeting thành "Hi", in ra màn hình
/*
Tạo biến mark = 9.7 và thực hiện:
- Làm tròn thành 10 và in ra
- Làm tròn về 9 và in ra
*/
const sayHi = "Hi";
check = check.replace("hello", sayHi);
console.log(check);
const mark = 9.7;
console.log(mark.toFixed());
console.log(Math.floor(mark));
// Tạo 1 biến lưu độ dài cạnh của hình vuông và tính diện tích hình vuông đó sau đó in ra màn hình
const edge = 10;
console.log(edge * edge);
/*
Viết cấu trúc điều kiện kiểm tra độ tuổi lái xe với điều kiện sau: 
- Nếu lớn hơn hoặc bằng 18 tuổi in ra màn hình: "Bạn đã đủ tuổi lái xe"
- Nếu nhỏ hơn 18 tuổi in ra màn hình: "Bạn chưa đủ tuổi lái xe"
*/
const urage = 19;
const var1 = "Bạn đã đủ tuổi lái xe";
const var2 = "Bạn chưa đủ tuổi lái xe";
if(urage >= 18){
    console.log(var1);
}
else{
    console.log(var2);
}
/*
Viết cấu trúc switch-case kiểm tra số chẳn và lẻ
*/
const n = 5;
const checkeven = "So chan";
const checkodd = "So le";
switch (n % 2) {
    case 0:
        console.log(checkeven);
        break;
    default:
        console.log(checkodd);
        break;
}
