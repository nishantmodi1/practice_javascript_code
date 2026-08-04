// Count Elements in Nested Array

const arr = [1, [2, 3], [4, [5, 6]]];

function isSumNested(arr){
  let sum=0
  for(let i=0; i<arr.length; i++){
    if(!Array.isArray(arr[i])){
      sum+=arr[i]
    }else{
      sum+=isSumNested(arr[i])
    }
  }
  return sum
}

console.log(isSumNested(arr))
