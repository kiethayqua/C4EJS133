// let numberA = document.getElementById("numbA");
// let numberB = document.getElementById("numbB");
// let result = document.getElementById("res");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("submitted");
//     console.log(sumPrime(Number(numberA.value), Number(numberB.value)));
//     result.innerHTML = sumPrime(Number(numberA.value), Number(numberB.value));
// });

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
let a = 20;
let b 
let res = sumPrime(a, b);
console.log(res);
