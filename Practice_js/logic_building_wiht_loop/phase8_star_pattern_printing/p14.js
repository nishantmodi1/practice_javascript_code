// Print Numbers in an Increasing Sequence (1, 23, 456, 7890, 12345) 


const prompt = require('prompt-sync')()

const num1=Number(prompt('Enter a Number: '))
const num2=Number(prompt('Enter a Number: '))

let k=0
for (let i = 0; i < num1; i++) {
  let st=""
  for (let j = 0; j <= i; j++) {
    if(k>=9){
      k=0
    }else{
      k++
    }
    st+=k
  }
  console.log(st)
}
