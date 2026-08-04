const prompt = require("prompt-sync")()

const  a =Number(prompt(""))
const  b =Number(prompt(""))

if(a>b){
  console.log("Greater number is: ", a)
}else{
  console.log("Greater number is: ", b)
}
