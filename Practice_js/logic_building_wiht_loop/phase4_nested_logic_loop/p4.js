// Print all prime numbers up to n using nested loop checking. 

const prompt = require('prompt-sync')()

const num=Number(prompt("Enter a number: "))

for(let i=2; i<=num; i++){
  let isPrime=true
  for(let j=2; j<i; j++){
    if(i%j===0){
      isPrime=false
      break
    }
  }
  if(isPrime){
    console.log(i)
  }
}