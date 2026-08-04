// Calculate and print the value of the series 1 + 1/2 + 1/3 + … + 1/n. 

const prompt = require('prompt-sync')()

let num = Number(prompt("Enter the number: "))
let sum=0
for (let i = 1; i <= num; i++) {
    sum += 1 / i;
}

console.log(sum)
