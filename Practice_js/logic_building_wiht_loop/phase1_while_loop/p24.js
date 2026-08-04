//  Print all factors of the given number. 

const prompt = require('prompt-sync')()

const num=Number(prompt(''))
let i=1
while(num>=i){
  if(num%i===0){
    console.log(i)
  }
  i++
}