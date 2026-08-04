// Find the largest digit in the given number. 

const prompt = require('prompt-sync')()

let num=Number(prompt(''))
let lg=-Infinity
while(num>0){
  let d=num%10;
  if(d>lg){
    lg=d
  }
  // console.log(num)
  num=Math.floor(num/10)
}
console.log(lg)