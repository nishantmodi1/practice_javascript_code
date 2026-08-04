const prompt = require("prompt-sync")()

const a= Number(prompt(""))
const b= Number(prompt(""))

if(a===b){
  console.log("Equal")
}else{
  console.log("Not Equal")
}