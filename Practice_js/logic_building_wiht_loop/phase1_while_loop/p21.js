// Print the square of each number from 1 to n. 

let prompt = require('prompt-sync')()
let n=Number(prompt(""))
function squareSum(n){
  let i=1
  let sum=0
  while(n>0){
    sum+=n*n
    n--
  }
  return sum
}

console.log(squareSum(n))