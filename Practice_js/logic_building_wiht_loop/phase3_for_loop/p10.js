// . Print the Fibonacci series up to the required number of terms. 

const prompt=require('prompt-sync')()

const num=Number(prompt("Enter a number: "))

let a=0
if(num>=1)console.log(a)
let b=1
if(num>=2)console.log(b)

for(let i=1; i<=num-2; i++){
  c=a+b
  console.log(c)
  a=b
  b=c
}

