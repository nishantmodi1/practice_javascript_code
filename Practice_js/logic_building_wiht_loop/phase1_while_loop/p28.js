// Find the smallest digit in the given number. 

const prompt = require('prompt-sync')()

let num=Number(prompt(''))
let sm=Infinity
while(num>0){
  let d=num%10;
  if(d<sm){
    sm=d
  }
  // console.log(num)
  num=Math.floor(num/10)
}
console.log(sm)