// Find the HCF (Highest Common Factor) of two given numbers. //approach: Euclidean Algorithm

const prompt = require('prompt-sync')()

let num1=Number(prompt(''))
let num2=Number(prompt(''))

// Approach 1: TC O(min(num1, num2))
// let smaller=Math.min(num1, num2)
// let i=smaller
// while(smaller>=0){
//   if(num1%smaller===0 && num2%smaller===0){
//     console.log(smaller)
//     return
//   }
//   smaller--
// }

// Approach 2 TC: O(logn)

while(num2!==0){
  let rem=num1%num2
  num1=num2
  num2=rem
}
console.log(num1)