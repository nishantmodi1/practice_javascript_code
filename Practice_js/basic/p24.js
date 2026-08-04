// Sum of Digits Until Single Digit

const prompt = require("prompt-sync")()

let n = Number(prompt(""))

while(n>=10){
  let k=0
  while(n>0){
    k=k+n%10
    n=Math.floor(n/10)
  }
  n=k
}
if(n<=9){
  console.log(n)
}

//other optimal way 
function isDigit(n){
  if(n==0) return 0
  return 1+(n-1)%9
}

console.log(isDigit(423))