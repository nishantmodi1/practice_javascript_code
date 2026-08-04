// Count even numbers

// function countEven(arr){
//   let count = 0
//   for(let i=0; i<arr.length; i++){
//     if(arr[i]%2===0){
//       count++
//     }
//   }
//   return count
// }

// using reduce()

function countEven(arr){
  return arr.reduce((acc, curr) => {
    if(curr%2===0){
      return acc+1
    }else{
      return acc
    }
  }, 0)
}

console.log(countEven([1, 2, 3, 4, 5, 8]))
