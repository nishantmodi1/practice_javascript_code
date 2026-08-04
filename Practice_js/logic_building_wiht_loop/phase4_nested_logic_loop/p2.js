// Print all possible pairs (i, j) where both i and j range from 1 to n. 

const prompt = require('prompt-sync')()

const num=Number(prompt("Enter a number: "))

for(let i=1; i<=num; i++){
  
  for(let j=1; j<=num; j++){
    console.log(`(${i}, ${j})`);
  }
  console.log()
}