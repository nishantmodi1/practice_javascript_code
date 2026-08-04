// Generate and print a number triangle pattern using nested loops. 

const prompt = require('prompt-sync')()

const num=Number(prompt("Enter a number: "))

for(let i=1; i<=num; i++){
  let st=""
  for(let j=1; j<=i; j++){
    st+=j+ " "
  }
  console.log(st)
}