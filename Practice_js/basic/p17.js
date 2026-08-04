// fibonacci series

const prompt = require("prompt-sync")()

const n = Number(prompt(""))

let a = 0
let b = 1
// let c = a+b
let c = 0
console.log(a)
console.log(b)
while(c<n){
  // c=a+b
  console.log(c)
  a=b
  b=c
  c=a+b
}