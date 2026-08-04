const prompt = require('prompt-sync')()

let n= Number(prompt(""))

let square = n**2
let c=0

// while(n>0){
//   n=Math.floor(n/10)
//   c++
// }

c=n.toString().length

let k=0
// get last digits from square
// k=n1 % (10 ** c);
let temp = n;

while (temp > 0) {
    if (temp % 10 !== square % 10) {
        console.log("Not Automorphic");
        process.exit(0);
    }

    temp = Math.floor(temp / 10);
    square = Math.floor(square / 10);
}

console.log("Automorphic")


console.log(c)
console.log(k)

// if(n==k){
//   console.log("automorphic")
// }else{
//   console.log("non automorphic")
// }






















































// while(n>0){
//   if(n%10 === n1%10){
//     break
//   }else{
//     console.log("not automorphic")
//     return
//   }
//   n1=n1/10
// }
// console.log(n1, n)
// console.log("automorphic")