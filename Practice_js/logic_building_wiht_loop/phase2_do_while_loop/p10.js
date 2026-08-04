// Print the Fibonacci series up to the required number of terms. 

const prompt=require('prompt-sync')()

let num=Number(prompt('Enter a number: '))

let a=0; 
let b=1

if(num>=1) console.log(a)
if(num>=2) console.log(b)

  
if(num>2){
  num=num-2
  do {
    let c=a+b
    console.log(c)
    a=b
    b=c
    num--
  } while (num>0);

}