// Print all numbers from 1 to n whose binary representation contains an even number of 1s. 

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter number of terms: "));

function isEven1s(binary){
  let count=0
  while(binary>0){
    let d=binary%10
    if(d===1) count++
    binary=Math.floor(binary/10)
  }
  return count%2===0
}
function isBinaryEven(n){
  let binary=""
  while(n>0){
    binary=(n%2) + binary
    // console.log('r is', binary)
    n=Math.floor(n/2)
  }
  return Number(isEven1s(binary))
}

for (let i = 1; i <= num; i++) {
  if(isBinaryEven(i)){
    console.log(i)
  }
}

// console.log();