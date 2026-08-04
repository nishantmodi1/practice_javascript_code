const prompt = require("prompt-sync")();

const a = Number(prompt(""))
const b = Number(prompt(""))
const c = Number(prompt(""))

if(a>b && a>c){
  console.log("Greater number is: ", a)
} else if(b>c && b>a){
  console.log("Greater number is: ", b)
}else{
  console.log("Greate number is: ", c)
}