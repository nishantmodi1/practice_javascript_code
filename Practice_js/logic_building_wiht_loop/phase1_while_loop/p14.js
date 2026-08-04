// Find and print the sum of digits of the given number.

const prompt=require("prompt-sync")()

let num=Number(prompt(""))

function countDigit(){
  let sum=0
  while(num>0){
    let d=num%10
    sum+=d
    num=Math.floor(num/10)
  }
  console.log(sum)
}

countDigit()