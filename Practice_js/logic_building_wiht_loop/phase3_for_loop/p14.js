// Find the HCF (Highest Common Factor) of the given numbers. 

const prompt=require('prompt-sync')()

const num1=Number(prompt("Enter a number: "))
const num2=Number(prompt("Enter a number: "))
let sm=Math.min(num1, num2)
for(let i=1; i<=num1; i++){
  if(num1%sm===0 && num2%sm===0){
    console.log("HCF: ", sm)
    return
  }
  sm--
}
