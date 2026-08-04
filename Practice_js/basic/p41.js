// Find the smallest number

// function smallestNumber(arr){
//   let smallest=arr[0]

//   for(let i=1; i<arr.length; i++){
//     if(arr[i]<smallest){
//       smallest=arr[i]
//     }
//   }
//   return smallest

// }

// using reduce()

function smallestNumber(arr) {
  return arr.reduce((acc, curr) => {
    if(curr<acc){
      return curr
    }else{
      return acc
    }
  }, Infinity)  
}
console.log(smallestNumber([1, 2, 6, 4, 5]))