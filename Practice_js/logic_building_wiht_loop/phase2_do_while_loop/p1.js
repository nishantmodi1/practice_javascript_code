// Print all numbers from 1 to 10. 

const prompt = require('prompt-sync')()

let num=Number(prompt(''))

let i=1

do{
  console.log(i)
  i++
}while(num>=i)