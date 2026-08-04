// Print all numbers between 1 and 100 whose sum of digits is even. 

const prompt = require("prompt-sync")();

let num = 100

function sumOfDigit(n){
  let sum=0

  while(n>0){
    let d=n%10;
    sum+=d
    n=Math.floor(n/10)
  }
  return sum
}

for (let i = 1; i <= num; i++) {
  if(sumOfDigit(i)%2===0){
    console.log(i)
  }
  
}