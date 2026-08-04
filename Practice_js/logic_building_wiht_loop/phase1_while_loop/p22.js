// Print the cube of each number from 1 to n. 

let prompt = require('prompt-sync')()
let n=Number(prompt(""))
function cube(n){
  let i=1
  while(n>=i){
    console.log(i*i*i)
    i++
  }
  
}

console.log(cube(n))