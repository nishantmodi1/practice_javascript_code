// Print Stars and Spaces Alternating (Stars and Blank Spaces) (b = blank space here) 

const prompt = require('prompt-sync')()

const num1=Number(prompt('Enter a Number: '))
const num2=Number(prompt('Enter a Number: '))

for (let i = 0; i < num1; i++) {
  let st=""
  for (let j = 0; j < num2-i-1; j++) {
    st+="b "
  }
  for (let j = 0; j <= i; j++) {
    if(j%2===0){
      st+="* "
    }else{
      st+="b "
    }
  }
  for (let j = 0; j < i; j++) {
    if((i+j)%2!==0){
      st+="* "
    }else{
      st+="b "
    }
  }
  console.log(st)
}
