// Find Maximum in Nested Array

const arr = [1, [20, 3], [4, [50, 6]]];

function MaxInNested(arr){
  let max=-Infinity
  for(let i=0; i<arr.length; i++){
    if(!Array.isArray(arr[i])){
      if(max<=arr[i]){
        max=arr[i]
      }
    }else{
      const nestedMax = MaxInNested(arr[i])
      console.log('nestedMax>>', nestedMax)
      if(max<=nestedMax){
        max=nestedMax
      }
    }
  }
  return max
}

console.log(MaxInNested(arr))