// Keep taking numbers from the user until 0 is entered, then print the sum of all entered numbers. 

const prompt = require('prompt-sync')()

function keepSumUntilenterzero(){
  let sum=0
  let num;
  do{
    num=Number(prompt('Enter a number: '))
    if(num!==0){
      sum+=num
    }
  }while(num!==0)
  
  return sum
}

console.log(keepSumUntilenterzero())