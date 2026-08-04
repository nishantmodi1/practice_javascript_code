// Print all prime numbers between 1 and 100. 

const prompt=require("prompt-sync")()

let num=Number(prompt(""))

function isPrime(k){
  let i=2;
  // console.log('k>>>', k)
  while(k>i){
    // console.log('dks')
    if(k%i===0){
      return false
    }
    i++
  }
  return true
}
function primeNumber(){
  let k=1; let i=1;
  while(num>=k){
    if(k===1 || k===2){
      console.log(k)
    }else if(isPrime(k)){
      console.log(k)
    }
    k++
  }
}

primeNumber()
