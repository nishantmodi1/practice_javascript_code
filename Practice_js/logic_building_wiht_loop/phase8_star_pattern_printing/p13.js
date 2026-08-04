// Print Numbers in an Increasing Sequence (1, 23, 456, 78910, 1112131415) 


const prompt = require('prompt-sync')()

const num1=Number(prompt('Enter a Number: '))
const num2=Number(prompt('Enter a Number: '))

let k=1
for (let i = 0; i < num1; i++) {
  let st=""
  for (let j = 0; j <= i; j++) {
    st+=k
    k++
  }
  console.log(st)
}
