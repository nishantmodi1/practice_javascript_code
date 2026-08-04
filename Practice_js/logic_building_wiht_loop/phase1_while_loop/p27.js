// Find the LCM (Least Common Multiple) of two given numbers. 

const prompt = require('prompt-sync')()

let num1=Number(prompt(''))
let num2=Number(prompt(''))

// Approach 1: TC O(max(num1, num2))
// let greater=Math.max(num1, num2)

// while(true){
//   if(greater%num1===0 && greater%num2===0){
//     console.log(greater)
//     return
//   }
//   greater++
// }

// Approach 2 Tc O(logn)
let multi=num1*num2
while(num2!==0){
  let rem=num1%num2
  num1=num2
  num2=rem
}
console.log(multi/num1)