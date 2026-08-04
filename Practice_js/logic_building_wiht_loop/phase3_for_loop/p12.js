// Print all factors of the given number. 

const prompt=require('prompt-sync')()

const num=Number(prompt("Enter a number: "))

for(let i=1; i<=num; i++){
  if(num%i===0){
    console.log(i)
  }
}
