// Count and print the total number of digits in a given number. 

const prompt=require("prompt-sync")()

let num=Number(prompt(""))

function countDigit(){
  let count=0
  while(num>0){
    let d=num%10
    count++
    num=Math.floor(num/10)
  }
  console.log(count)
}

countDigit()