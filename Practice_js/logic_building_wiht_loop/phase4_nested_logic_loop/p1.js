// Print the multiplication tables for all numbers from 1 to 10. 

const prompt = require('prompt-sync')()

const num=10

for(let i=0; i<num; i++){
  console.log(`Table of ${i}`)
  for(let j=1; j<=10; j++){
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log()
}