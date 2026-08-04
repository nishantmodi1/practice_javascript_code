// Print the multiplication table of a given number. 

const prompt = require('prompt-sync')()

let num=Number(prompt(''))

let i=1

do{
  console.log(num*i)
  i++
}while(num>=i && i<=10)