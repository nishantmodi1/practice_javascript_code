// Find the LCM (Least Common Multiple) of the given numbers. 

const prompt=require('prompt-sync')()

const num1=Number(prompt("Enter a number: "))
const num2=Number(prompt("Enter a number: "))
let lg=Math.max(num1, num2)
for(let i=1; i<=num1*num2; i++){
  if(lg%num1===0 && lg%num2===0){
    console.log("LCM: ", lg)
    return
  }
  lg++
}

