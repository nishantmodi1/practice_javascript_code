// Calculate and print the factorial of a given number.

const prompt = require('prompt-sync')()

let n=Number(prompt(""))
function factorial(){
  let i=1
  let fact=1
  // console.log(fact)
  while(i<=n){
    fact*=n
    n=n-1
  }
  console.log(fact)  
}

factorial(n)