// Find the largest number

// function findLargest(arr){
//   let largest=arr[0]

//   for(let i=1; i<arr.length; i++){
//     if(arr[i]>largest){
//       largest=arr[i]
//     }
//   }
//   return largest
// }

// using reduce()

function findLargest(arr){
  return arr.reduce((acc, curr) => {
    if(curr>acc){
      return curr
    }else{
      return acc
    }
  }, -Infinity)
}

console.log(findLargest([1, 2, 6, 4, 5]))