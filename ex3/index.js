let a = prompt("Please enter number a");
let b = prompt("Please enter number b");

function isPrime(n) {
    let is_prime = n == 1 ? false : true;
    for (let i = 2; i < n; i++) {
        n % i == 0 ? (is_prime *= false) : (is_prime *= true);
    }
    return is_prime;
}

function sumPrime(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        isPrime(i) ? (sum = sum + i) : (sum = sum);
    }
    return sum;
}

let res = sumPrime(a, b);
console.log(res);

let n = prompt("enter number n");
function numberOneTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= i; j++) {
            str += "*";
        }
        console.log(str);
    }
}

numberOneTriangle(n);
