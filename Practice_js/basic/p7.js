const prompt = require("prompt-sync")()

const x = Number(prompt(""))

if(x===0){
  console.log("Number is Zero")
}else if(x>0){
  console.log("Number is Positive")
}else{
  console.log("Number is Negative")
}