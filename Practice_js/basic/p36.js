// math.pow

const prompt = require("prompt-sync")()

let n=Number(prompt(""))
let p=Number(prompt(""))
let res=1
while(p>0){
  res*=n
  p--
}
console.log(res)