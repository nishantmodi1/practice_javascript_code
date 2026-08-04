// Find and print the sum of all even numbers from 1 up to n.

const prompt=require('prompt-sync')()

const num=Number(prompt("Enter a number: "))
let sum=0
for(let i=1; i<=num; i++){
  if(i%2===0){
    sum+=i
  }
}

console.log(sum)