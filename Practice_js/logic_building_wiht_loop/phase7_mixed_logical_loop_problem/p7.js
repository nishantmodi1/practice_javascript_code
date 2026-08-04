// Find & print the sum of odd digits & the sum of even digits of the given number. 

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number : "));
let evenSum=0
let oddSum=0
while(num>0){
  let d=num%10
  if(d%2===0){
    evenSum+=d
  }else{
    oddSum+=d
  }
  num=Math.floor(num/10)
}

console.log("Sum of even digits:", evenSum);
console.log("Sum of odd digits:", oddSum);