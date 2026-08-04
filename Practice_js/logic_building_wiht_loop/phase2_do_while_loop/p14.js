// Find and print the sum of digits of the given number. 

const prompt=require('prompt-sync')()

let num=Number(prompt("Enter a number: "))
let sum=0

do {
  let d=num%10
  sum+=d
  num=Math.floor(num/10)
} while (num!==0);

console.log(sum)