// Create a menu-driven program that allows the user to choose and perform different operations. 

console.log("=== Menu ===")
console.log("1. Addition")
console.log("2. Subtraction")
console.log("3. Multiplication")
console.log("4. Division")
console.log("5. Exit")

const prompt=require('prompt-sync')()
let result=0
let num;
do {
  const num=Number(prompt("enter a number: "))
  if(num===1){
    const a=Number(prompt("enter 1st number: "))
    const b=Number(prompt("enter 2nd number: "))
    result=a+b
    console.log('result: ', result)
    return
  }else if(num===2){
    const a=Number(prompt("enter 1st number: "))
    const b=Number(prompt("enter 2nd number: "))
    result=Math.abs(a-b)   
    console.log('result: ', result) 
    return
  }else if(num===3){
    const a=Number(prompt("enter 1st number: "))
    const b=Number(prompt("enter 2nd number: "))
    result=a*b    
    console.log('result: ', result)
    return
  }else if(num===4){
    const a=Number(prompt("enter 1st number: "))
    const b=Number(prompt("enter 2nd number: "))
    result=b!==0?a/b:'Not Define'
    console.log('result: ', result)
    return
  }else if(num===5){
    console.log("exited!")
    return
  }
} while (num>=1 && num<=5);
// console.log("result: ", result)

