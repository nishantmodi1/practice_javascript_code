// Calculate and print the value of the series 1³ + 2³ + 3³ + … + n³. 

const prompt = require('prompt-sync')()

let num = Number(prompt("Enter the number: "))
let sum=0
// let sum=(num**2)*((num+1)**2)/4
for (let i = 1; i <= num; i++) {
    sum += i * i * i;
}

console.log(sum)
