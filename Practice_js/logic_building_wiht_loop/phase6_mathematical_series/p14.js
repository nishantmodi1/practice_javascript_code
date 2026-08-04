//  Calculate and print the value of the series x − x²/2! + x³/3! − x⁴/4! + …. 

const prompt = require("prompt-sync")();

let n = Number(prompt("Enter number of terms: "));
let x = Number(prompt("Enter x: "));

let sum = 0;
let fact = 1;
let power = 1;
let sign = 1;

for (let i = 1; i <= n; i++) {
    power *= x;      // x^i
    fact *= i;       // i!

    sum += sign * (power / fact);

    sign *= -1;      // Change + to - and - to +
}

console.log(sum);