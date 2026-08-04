// Find and print the sum of the first n natural numbers. 

const prompt = require('prompt-sync')()

let num = Number(prompt("Enter the number: "))

let sum=num*(num+1)/2
console.log(sum)