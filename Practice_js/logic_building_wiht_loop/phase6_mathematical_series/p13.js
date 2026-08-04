// Calculate and print the value of the series 1 + x + x² + x³ + … + xⁿ. 

const prompt = require('prompt-sync')()

let num = Number(prompt("Enter the number: "))
let x = Number(prompt("Enter the number: "))

let pow=1
let sum=0
for (let i = 0; i < num; i++) {
  sum+=pow
  pow *= x;
}

console.log(sum)