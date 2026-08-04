// . Calculate and print the factorial of every number from 1 to n. 

const prompt=require('prompt-sync')()

const num=Number(prompt("Enter a number: "))

function factOf(i){
  let fa=1
  for(let j=i; j>=1; j--){
    fa*=j
  }
  return fa
}

for(let i=1; i<=num; i++){
  // factOf(i)
  console.log(factOf(i))
}

