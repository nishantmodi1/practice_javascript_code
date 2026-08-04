// Find and print the sum of the Fibonacci series up to the required number of terms.

const prompt = require('prompt-sync')()

let num = Number(prompt("Enter the number: "))

let sum=0
let a = 0
if(num>=1) sum=0

let b=1
if(num>=2) sum=1
let c;
for (let i = 3; i <= num; i++) {
  c=a+b
  sum+=c
  a=b
  b=c
}

console.log(sum)
