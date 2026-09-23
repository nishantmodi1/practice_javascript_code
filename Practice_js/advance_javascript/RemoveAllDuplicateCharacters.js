// 5. Remove All Duplicate Characters

// Question:
// Remove duplicate characters from a string.

// Example Input:
// "programming"

// Example Output:
// "progamin"


const RemoveAllDuplicateCharacters = (str) => {
    
    return [...new Set(str)].join('');
}

console.log(RemoveAllDuplicateCharacters('programming'))



// const RemoveAllDuplicateCharacters = (str) => {
//     return str.split('').filter((char, index, arr) => arr.indexOf(char) === index).join('')
// }

// console.log(RemoveAllDuplicateCharacters('programming'))


// const RemoveAllDuplicateCharacters = (str) => {
//     let seen ={}
//     let result=""
    
//     for(let char of str) {
//         if (!seen[char]) {
//             console.log(seen)
//             seen[char] = true;
//             result += char
//         }
//     }
//     return result;
// }

// console.log(RemoveAllDuplicateCharacters('programming'))