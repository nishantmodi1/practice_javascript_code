// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Hello, World!");

const extractVowels = (str) => {
    const vowels='aeiouAEIOU'
    let result ="";

    for(let char of str) {
        if(vowels.includes(char)){
            result +=char
        }
    }
    return result
}

console.log(extractVowels('front-end developer'))


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Hello, World!");

// const extractVowels = (str) => {
//     return str.match(/[aeiou]/gi).join('')
// }
// console.log(extractVowels('front-end developer'))

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Hello, World!");

// const extractVowels = (str) => {
//     return str.match(/[aeiou]/gi).join('').length
// }
// console.log(extractVowels('front-end developer'))