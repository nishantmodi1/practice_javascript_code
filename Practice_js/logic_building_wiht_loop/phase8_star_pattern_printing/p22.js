// Print Numbers in an Increasing Sequence (*, **, ***, ****, *****, ****, ***, **, *) 


const prompt = require('prompt-sync')()

const num1=Number(prompt('Enter a Number: '))
const num2=Number(prompt('Enter a Number: '))
let k=0
for (let i = 0; i < num1; i++) {
  let st=""
  for (let j = 0; j <= i; j++) {
    st+="*"
  }
  console.log(st)
}
for (let i = 0; i < num1; i++) {
  let st=""
  for (let j = num2 - i-1; j >= 1; j--) {
    st+="*"
  }
  console.log(st)
}
