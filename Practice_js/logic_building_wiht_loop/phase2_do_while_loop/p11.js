// Find the HCF (Highest Common Factor) of the given numbers.

const prompt = require('prompt-sync')()

const a=Number(prompt('Enter a number: '))
const b=Number(prompt('Enter a number: '))
// let sm=Math.min(a, b)

// do {
//   if(a%sm===0 && b%sm===0){
//     console.log(sm)
//     return;
//   }  
//   sm--
// } while (sm>0);

function hcf(a, b){
  if(b === 0) return a
  return hcf(b, a%b)
}

console.log('hcf', hcf(a, b))