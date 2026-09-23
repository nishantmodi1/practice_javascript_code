// 3. Reverse Only the Vowels in a String

// Question:
// Given a string, reverse only the vowels and keep consonants in the same position.

// Example Input:
// "hello world"

// Example Output:
// "holle werld"

const ReverseOnlytheVowelsinaString=(str) => {
    
    let vowels=str.match(/[aeiou]/gi)
    if(!vowels) return str;
    
    return str.replace(/[aeiou]/gi, () => vowels.pop())
   
}

console.log(ReverseOnlytheVowelsinaString('hello world'))