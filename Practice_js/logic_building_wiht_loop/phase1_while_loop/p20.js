// Find and print the sum of the Fibonacci series up to n terms. 

// Print the Fibonacci series up to n terms. 

const prompt = require('prompt-sync')()

const num=Number(prompt(""))

function printFibonacci(n){
  let sum=1
  let a =0;
  let b=1;
  console.log(a)
  console.log(b)
  while(n>0){
    c=a+b
    sum+=c
    console.log(c)
    a=b
    b=c
    n--
  }
  console.log(sum)
}

printFibonacci(num)