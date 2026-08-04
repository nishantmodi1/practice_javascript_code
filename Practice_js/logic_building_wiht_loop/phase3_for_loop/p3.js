// Print all even numbers between 1 and 100. 

const prompt = require('prompt-sync')()

const num=100

for(let i=1; i<=num; i++){
  if(i%2===0){
    console.log(i)
  }
}