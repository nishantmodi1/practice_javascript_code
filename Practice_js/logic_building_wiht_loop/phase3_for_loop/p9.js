// Check whether the given number is a prime number.

const prompt=require('prompt-sync')()

const num=Number(prompt("Enter a number: "))

function isPrime(i){
  if(i===1 || i===2 || i===3){
    return true
  }
  for(let j=3; j<i; j++){
    if(i%j===0){
      return false
    }
  }
  return true
}

// for(let i=1; i<=num; i++){
  // factOf(i)
  if(isPrime(num)){
    console.log('Prime no.')
  }else{
    console.log('not prime no')
  }
// }

