// Print n Stars on Same Line 

const prompt = require('prompt-sync')()

const num=Number(prompt('Enter a Number: '))

let st=''
for (let i = 0; i < num; i++) {
  st+="*"
}
console.log(st)