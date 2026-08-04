// diff of even and odd of a digit

const prompt = require("prompt-sync")()

let n = Number(prompt(""))

let e=0; let o=0

while(n>0){
  let d=n%10
  if(n%2===0){
    e=e+d
  }else{
    o=o+d
  }
  n=Math.floor(n/10)

}

console.log(Math.abs(e-o))