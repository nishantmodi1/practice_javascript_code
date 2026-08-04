// Print all numbers from 1 to 100 whose sum of digits is a multiple of 3. 

const prompt = require("prompt-sync")();

let num = 100

function sumOfDigit(n){
  let sum=0
  while(n>0){
    let d=n%10
    sum+=d
    n=Math.floor(n/10)
  }
  return sum
}

for(let i=0; i<num; i++){
  if(sumOfDigit(i)%3===0){
    console.log(i)
  }
}
