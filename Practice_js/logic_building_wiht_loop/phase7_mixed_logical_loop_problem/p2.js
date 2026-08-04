// Count Total numbers between 1 & 500 are divisible by 7 but not divisible by 5. 

const prompt = require("prompt-sync")();

let num = 500

let count=0

for(let i=1; i<=num; i++){
  if(i%7===0 && i%5!==0){
    count++
  }
}

console.log(count)