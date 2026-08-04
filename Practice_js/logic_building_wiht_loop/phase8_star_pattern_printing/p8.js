// Print Stars in Odd Numbers (1, 3, 5, 7, 9) 

const prompt = require('prompt-sync')()

const num1=Number(prompt('Enter a Number: '))
const num2=Number(prompt('Enter a Number: '))

for (let i = 0; i < num1; i++) {
  let st=''
  for (let j = 0; j <= i; j++) {
    st+="*"
  }
  for (let j = 0; j < i; j++) {
    st+="*"
  }
  console.log(st)
}