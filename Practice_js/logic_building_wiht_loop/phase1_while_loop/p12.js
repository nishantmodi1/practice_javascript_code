//  Reverse the given number and print the reversed value. 

const prompt=require("prompt-sync")()

let num=Number(prompt(""))

function revDigit(){
  let rev=0
  while(num>0){
    let d=num%10
    rev=rev*10+d
    num=Math.floor(num/10)
  }
  console.log(rev)
}

revDigit()