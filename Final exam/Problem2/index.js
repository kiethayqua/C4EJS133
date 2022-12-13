const arr = [];
function numberOneTriangle(n)
{
    for(let i = 1; i <= n; i++ ){
        let temp = "*".repeat(i);
        arr.push(temp);
    }
}
let n = prompt("Enter the value of n: ");
numberOneTriangle(n);
console.log(arr[5]);
const container = document.getElementById("container");
for(let i = 0; i < n; i++){
    let temp = document.createElement("div");
    temp.innerHTML = arr[i];
    container.appendChild(temp);
}