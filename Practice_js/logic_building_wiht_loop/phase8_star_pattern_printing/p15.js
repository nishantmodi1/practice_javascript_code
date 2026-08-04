// Print Numbers in an Increasing Sequence (1, 01, 010, 1010, 10101) 


const prompt = require('prompt-sync')()

const num1=Number(prompt('Enter a Number: '))
const num2=Number(prompt('Enter a Number: '))

let k=0
for (let i = 0; i < num1; i++) {
  let st=""
  for (let j = 0; j <= i; j++) {
    k++
    if(k%2===0){
      st+=0
    }else{
      st+=1
    }
    
  }
  console.log(st)
}
