const prompt = require("prompt-sync")();

let n = Number(prompt(""))
let p = n
let c=0
while(n>0){
  c=c+1
  n=Math.floor(n/10)
}
let k =0
n = p
while(n>0){
  let d=n%10
  k = k+ d**c
  n=Math.floor(n/10)
}
console.log(c)
if(k===p){
  console.log('armstrong number')
}else{
  console.log('not armstrong number')
}