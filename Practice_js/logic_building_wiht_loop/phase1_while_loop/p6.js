// Calculate and print the sum of the first n natural numbers.

const prompt = require('prompt-sync')()
const n=Number(prompt(""))
function sumNatural(n) {
  let sum=0;
  let i=1
  while(i<=n){
    sum+=i
    i++
  }
  console.log(sum)
}

sumNatural(n)