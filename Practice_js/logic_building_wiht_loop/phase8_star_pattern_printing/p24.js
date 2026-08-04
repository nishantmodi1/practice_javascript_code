// Print Numbers in an Increasing Sequence (5, 545, 54345, 5432345, 543212345) 


const prompt = require('prompt-sync')()

const num=Number(prompt('Enter a Number: '))

let k=0
for (let i = 0; i < num; i++) {
  let st=""
  for (let j = 0; j < num-i-1; j++) {
    st+=" "
  }
  for (let j = 0; j <= i; j++) {
    st+=num-j
  }
  for (let j = i; j >= 1; j--) {
    st+=num-j+1
  }
  console.log(st)
}
