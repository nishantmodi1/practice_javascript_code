// Print Numbers in an Increasing Sequence (A, BB, CCC, DDD, EEEEE) 


const prompt = require('prompt-sync')()

const num1=Number(prompt('Enter a Number: '))
const num2=Number(prompt('Enter a Number: '))

for (let i = 0; i < num1; i++) {
  let st=""
  for (let j = 0; j <= i; j++) {
    st+=String.fromCharCode(i+65)
    
  }
  console.log(st)
}
