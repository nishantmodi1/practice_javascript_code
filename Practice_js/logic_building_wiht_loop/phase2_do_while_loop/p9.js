// Calculate and print the factorial of the given number. 

const prompt=require('prompt-sync')()

let num=Number(prompt('Enter a number: '))

let i=1
do {
  if(num%i===0){
    console.log(i)
  }
  i++
} while (num>=i);