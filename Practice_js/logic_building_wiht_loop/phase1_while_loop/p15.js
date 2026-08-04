// Check whether the given number is an Armstrong number. 

const prompt=require("prompt-sync")()

let num=Number(prompt(""))

function pow(n){
  let count=0
  while(n>0){
    let d=n%10
    count++
    n=Math.floor(n/10)
  }
  return count;
}
function armstrong(){
  let sum=0
  let n=num
  let p=pow(n)
  while(num>0){
    let d=num%10
    sum+=d**p
    num=Math.floor(num/10)
  }
  console.log(n===sum?'armstrong':'not armstrong')
}

armstrong()
