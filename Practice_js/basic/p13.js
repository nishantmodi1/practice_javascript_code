const prompt = require("prompt-sync")()

const x = Number(prompt("Enter two digit number: "))

const o= x%10
const t= Math.trunc(x/10)
const isCheck = (o*t + (o+t)) 
console.log(isCheck, t, o)
if(isCheck === x){
  console.log("Number is Special no")
}else{
  console.log("number is not special no")
}