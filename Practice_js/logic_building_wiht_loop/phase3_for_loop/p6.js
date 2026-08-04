// Calculate and print the factorial of a given number. 

const prompt = require('prompt-sync')()

const num=Number(prompt("enter a number: "))
let fa=1
for(let i=num; i>=1; i--){
  fa=fa*i
}
console.log(fa)