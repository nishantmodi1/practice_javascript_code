// Print Numbers in an Increasing Sequence (1, 121, 12321, 1234321, 123454321) 


const prompt = require('prompt-sync')()

const num1=Number(prompt('Enter a Number: '))
const num2=Number(prompt('Enter a Number: '))
let k=0
for (let i = 0; i < num1; i++) {
  let st=""
  for (let j = 0; j <= num2-i-1; j++) {
    st+=" "
  }
  for (let j = 0; j <= i; j++) {
    st+=j+1
  }
  for (let j = i; j >= 1; j--) {
    st+=j
  }
  console.log(st)
}
