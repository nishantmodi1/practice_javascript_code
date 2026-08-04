// Print the square of each number from 1 to n. 

const prompt=require('prompt-sync')()

const num=Number(prompt("Enter a number: "))

for(let i=1; i<=num; i++){
  console.log(i*i)
}
