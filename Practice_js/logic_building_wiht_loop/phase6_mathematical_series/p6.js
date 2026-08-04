// Print the Fibonacci series up to the required number of terms.

const prompt = require('prompt-sync')()

let num = Number(prompt("Enter the number: "))

let a = 0
if(num>=1) console.log(a)

let b=1
if(num>=2) console.log(b)

let c;
for (let i = 3; i <= num; i++) {
  c=a+b
  console.log(c)
  a=b
  b=c
}


