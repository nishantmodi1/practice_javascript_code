// Check whether the given number is a prime number.

const prompt=require("prompt-sync")()

let num=Number(prompt(""))

function isPrime(k){
  let i=2;
  // console.log('k>>>', k)
  while(k>i){
    if(k===1 || k===2){
      return true
    }
    if(k%i===0){
      return false
    }
    i++
  }
  return true
}
function primeNumber(){
  let k=1; let i=1;
  if(isPrime(num)){
    console.log(num, 'is prime')
  }else{
    console.log('not prime')
  }
}

primeNumber()
