// Calculate and print the value of the series 1! + 2! + 3! + … + n!. 

const prompt = require('prompt-sync')()

let num = Number(prompt("Enter the number: "))
let fact=1
let sum=0
for (let i = 1; i <= num; i++) {
  fact*=i
  sum+=fact
}

console.log(sum)