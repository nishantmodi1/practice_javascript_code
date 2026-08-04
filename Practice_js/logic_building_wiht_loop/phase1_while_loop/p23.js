// Print all numbers between a and b that are divisible by 7. 

let prompt = require('prompt-sync')()
let a=Number(prompt(""))
let b=Number(prompt(""))
function cube(a, b){
  
  while(b>=a){
    if(a%7===0){
      console.log(a)
    }
    a++
  }
  
}

console.log(cube(a, b))
