// Print sum of All Elements of an Array

const arr = [1, 2, 3, 4, 5];

function sumOf(arr){
  let sum=0
  for(let i=0; i<arr.length; i++){
    sum+=arr[i]
  }
  return sum
}

console.log(sumOf(arr))