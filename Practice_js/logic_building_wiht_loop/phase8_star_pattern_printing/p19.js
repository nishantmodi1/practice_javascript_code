// Print Numbers in an Increasing Sequence (A, CDE, FGHIJ, KLMNOP, QRSTUVWXY) 


const prompt = require('prompt-sync')()

const num1=Number(prompt('Enter a Number: '))
const num2=Number(prompt('Enter a Number: '))
let k=0
for (let i = 0; i < num1; i++) {
  let st=""
  for (let j = 0; j <= num2-i-1; j++) {
    // st+=String.fromCharCode(j+65)
    st+=" "
    
  }
  for (let j = 0; j <= i; j++) {
    st+=String.fromCharCode(k+65)
    k++
  }
  for (let j = 0; j < i; j++) {
    st+=String.fromCharCode(k+65)
    k++
  }
  console.log(st)
}
