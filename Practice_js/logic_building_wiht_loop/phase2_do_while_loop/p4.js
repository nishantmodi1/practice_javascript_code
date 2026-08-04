// Keep taking numbers from the user until 0 is entered, then print the largest number among all inputs. 

let prompt=require('prompt-sync')()
let lg=-Infinity
let num
do{
  num=Number(prompt('Enter a Number: '))
  if(lg<num){
    lg=num
  }
}while(num!==0)

console.log(lg)