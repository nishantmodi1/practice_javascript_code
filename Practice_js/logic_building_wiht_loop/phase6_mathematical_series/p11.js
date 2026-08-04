// Print the series of powers of two: 1 + 2 + 4 + 8 + … + 2ⁿ. 

const prompt = require('prompt-sync')()

let num = Number(prompt("Enter the number: "))

let sum = (2 ** (num)) - 1;

console.log(sum); //num goes from 0 to n for num+1 else only num