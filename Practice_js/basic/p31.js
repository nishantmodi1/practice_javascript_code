// Print Nested Array Elements

const arr = [1, [2, [3, 4]], 5];

function nestedArrEle(arr){
  let newAr=[]
  for(let i=0; i<arr.length; i++){
    if(!Array.isArray(arr[i])){
      newAr.push(arr[i])
    }else{
      newAr.push(...nestedArrEle(arr[i]))
    }
  }
  return newAr
}

console.log(nestedArrEle(arr))