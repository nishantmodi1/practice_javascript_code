// Take 5 numbers as input, skip any number that is 0 using continue, and calculate the sum of the remaining numbers. 

const prompt = require("prompt-sync")();

let num;
let n=5
let sum=0
while(n>0){
  num = Number(prompt("Enter num: "));
  if(num!==0){
    sum+=num
  }
  n--
}
console.log(sum)