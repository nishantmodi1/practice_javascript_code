// Find and print the sum of the Fibonacci series. 

const prompt=require('prompt-sync')()

const num=Number(prompt("Enter a number: "))
let sum=0
let a=0
let b=1
if(num>=2)sum=1

for(let i=1; i<=num-2; i++){
  let c=a+b
  sum=sum+c
  // console.log(c)
  a=b
  b=c
}

console.log(sum)