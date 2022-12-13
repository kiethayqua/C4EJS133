function prime(n)
{
    if (n < 2){
        return false;
    }
    let count = 0;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            count ++;
        }
    }
    return Number(count) === 0;
}
let a = prompt("Enter the value of a: ");
let b = prompt("Enter the value of b: ");
let sum = 0;
for(let i = Number(a) ; i <= Number(b);i++){
    if(prime(i) == true){
        sum += i;
    }
}
console.log(sum);
const output = document.getElementById("output");
output.innerHTML = sum;
