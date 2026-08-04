// Print the first n terms of a geometric progression for the given first term and common ratio. 

const prompt = require('prompt-sync')()

let num = Number(prompt("Enter the number: "))
let a = Number(prompt("Enter the number: "))
let r = Number(prompt("Enter the number: "))

for (let i = 1; i <= num; i++) {
    let nthgpTerm = a*(r**(i - 1))
    console.log(nthgpTerm);
}
console.log(nthterm)

