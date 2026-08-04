// Print all numbers between a and b that are divisible by 7. 

const prompt=require('prompt-sync')()

const num1=Number(prompt("Enter a number: "))
const num2=Number(prompt("Enter a number: "))

for(let i=num1; i<=num2; i++){
  if(i%7===0){
    console.log(i)
  }
}
