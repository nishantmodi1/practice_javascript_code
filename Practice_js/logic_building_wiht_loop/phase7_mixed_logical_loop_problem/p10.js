// Find the number between 1 and n that has the maximum digit sum, and print that number along with its digit sum. 

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

function sumOfDigit(n){
  let k=0
  while(n>0){
    let d=n%10
    k+=d
    n=Math.floor(n/10)
  }
  return k
}

let max=-Infinity
let res=0
for(let i=1; i<=num; i++){
  if(sumOfDigit(i)>=max){
    max=sumOfDigit(i)
    res=i
  }
}
console.log(res)