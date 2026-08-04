// Calculate the sum of all odd numbers from 1 up to n. 

const prompt = require('prompt-sync')()

const n=Number(prompt(""))
function oddSum(){
  let sum=0;
  let i=1
  while(i<=n){
    if(i%2!==0){
      sum+=i
    }
    i++
  }
  console.log(sum)
}

oddSum(n)