// Find and print the product of all digits of a given number. 

const prompt=require("prompt-sync")()

let num=Number(prompt(""))

function productDigit(){
  let prod=1
  while(num>0){
    let d=num%10
    prod*=d
    num=Math.floor(num/10)
  }
  console.log(prod)
}

productDigit()