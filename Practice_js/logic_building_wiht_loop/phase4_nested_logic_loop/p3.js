// For every number from 1 to n, count and print the total number of its factors. 

const prompt = require('prompt-sync')()

const num=Number(prompt("Enter a number: "))

for(let i=1; i<=num; i++){
  let count=0
  for(let j=1; j<=i; j++){
    if(i%j===0){
      count++
    }  
  }
  console.log(`${i} -> ${count} factors`);
  console.log()
}