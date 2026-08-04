// Print the first n terms of an arithmetic progression for the given first term and common difference.

const prompt = require('prompt-sync')()

let num = Number(prompt("Enter the number: "))
let a = Number(prompt("Enter the number: "))
let d = Number(prompt("Enter the number: "))

for (let i = 1; i <= num; i++) {
    let nthTerm = a + (i - 1) * d;
    console.log(nthTerm);
}
console.log(nthterm)

