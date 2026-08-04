// Print the Fibonacci pattern row by row, where each row prints the next Fibonacci numbers

const prompt = require('prompt-sync')()

const num=Number(prompt("Enter a number: "))
let a=0
let b=1
for(let i=1; i<=num; i++){
  let st=''
  for(let j=1; j<=i; j++){
    st+=a + " "
    let c=a+b
    a=b
    b=c
  }
  console.log(st)
}