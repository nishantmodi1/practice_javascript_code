// Print Numbers in an Increasing Sequence (1, 12, 123, 1234, 12345) 


const prompt = require('prompt-sync')()

const num1=Number(prompt('Enter a Number: '))
const num2=Number(prompt('Enter a Number: '))
let k=0
for (let i = 0; i < num1; i++) {
  let st=""
  for (let j = 0; j <= i; j++) {
    st+=j+1
  }
  console.log(st)
}
