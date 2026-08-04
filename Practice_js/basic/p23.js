// happy no

const prompt = require('prompt-sync')()

// let n = Number(prompt(""))
let n = Number(prompt("Enter a number: "));

while(n!==1 && n!==4){
  let k=0
  while(n>0){
    let d=n%10
    k=k+d**2
    n=Math.floor(n/10)
  }
  n=k
}

console.log(n===1?"Happy Number":"Not a happy Number")