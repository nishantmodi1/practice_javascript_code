// Reverse a string ("hello" → "olleh")

// function reverseString(str){
//   let res=""

//   for(let i=str.length-1; i>=0; i--){
//     res+=str[i]
//   }
//   return res

// }

// using reduce()
function reverseString(str){
  // return str.split("").reverse().join("")
  return str.split("").reduce((acc, curr) => curr+acc, "")
}

console.log(reverseString("hello"))
