// Check whether the given number is a Perfect number. 

const prompt=require("prompt-sync")()

let num=Number(prompt(""))

function perfectNumber(){
  let sum=0
  let k=1
  while(num>k){
    if(num%k===0){
      sum+=k
    }
    k++
  }
  console.log(n===sum?'perfectNumber': 'not a perfectNumber')
}

perfectNumber()
