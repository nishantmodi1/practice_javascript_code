// Print the Fibonacci series up to n terms. 

const prompt = require('prompt-sync')()

const num=Number(prompt(""))

function printFibonacci(n){
  let a =0;
  let b=1;
  console.log(a)
  console.log(b)
  while(n>0){
    c=a+b
    console.log(c)
    a=b
    b=c
    n--
  }
}

printFibonacci(num)