// Calculate and print the value of the series 1² + 2² + 3² + … + n². 

const prompt = require('prompt-sync')()

let num = Number(prompt("Enter the number: "))

// let sum=num*(num+1)*(2*num+1)/6
for (let i = 1; i <= num; i++) {
    sum += i * i;
}

console.log(sum)
