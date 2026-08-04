// Print the multiplication table of a given number. 

const prompt = require('prompt-sync')()

const num=Number(prompt("enter a number: "))

for(let i=1; i<=10; i++){
  console.log(num*i)
}