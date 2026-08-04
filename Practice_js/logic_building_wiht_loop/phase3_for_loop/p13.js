// Find and print the sum of all factors of the given number. 

const prompt=require('prompt-sync')()

const num=Number(prompt("Enter a number: "))
let sum=0
for(let i=1; i<=num; i++){
  if(num%i===0){
    sum+=i
  }
}
console.log(sum)
