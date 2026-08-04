// Print Numbers in an Increasing Sequence (A, BC, DEF, GHIJ, KLMNO) 


const prompt = require('prompt-sync')()

const num1=Number(prompt('Enter a Number: '))
const num2=Number(prompt('Enter a Number: '))

let k=65
for (let i = 0; i < num1; i++) {
  let st=""
  for (let j = 0; j <= i; j++) {
    st+=String.fromCharCode(k)
    k++
  }
  console.log(st)
}
