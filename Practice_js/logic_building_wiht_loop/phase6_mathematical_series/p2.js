// Find and print the sum of the first n even numbers. 

const prompt = require('prompt-sync')()

let num = Number(prompt("Enter the number: "))

let sum=Number(num*(num+1))
console.log(sum)
