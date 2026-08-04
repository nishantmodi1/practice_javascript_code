const prompt = require("prompt-sync")()

const a = Number(prompt(""))
const b = Number(prompt(""))
const c = Number(prompt(""))

if(a>=b && a<=c){
  console.log("Second largest number is: ", a)
} else if(b>=a && b<=c){
  console.log("Second largest number is: ", b)
}else{
  console.log("Second largest number is: ", c)
}