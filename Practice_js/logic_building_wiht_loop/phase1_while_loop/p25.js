// Find and print the sum of all factors of the given number.

const prompt = require('prompt-sync')()

const num=Number(prompt(''))
let i=1
let sum=0
while(num>=i){
  if(num%i===0){
    console.log(i)
    sum+=i
  }
  i++
}
console.log(sum)