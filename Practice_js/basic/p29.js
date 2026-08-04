// Count Elements in Nested Array

const arr = [1, [2, 3], [4, [5, 6]]];

function countNestedAr(arr){
  let count = 0

  for(let i=0; i<arr.length; i++){
    if(!Array.isArray(arr[i])){
      count++
    }else{
      count+= countNestedAr(arr[i])
    }
  }
  return count
}

console.log("count: ", countNestedAr(arr))