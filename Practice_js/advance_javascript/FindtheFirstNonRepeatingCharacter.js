// Find the First Non-Repeating Character

// Question:
// Find the first character in a string that does not repeat.

// Example Input:
// "swiss"

// Example Output:
// "w"


const FindtheFirstNonRepeatingCharacter = (str) => {
     for(let char of str) {
         if(str.indexOf(char) === str.lastIndexOf(char)) {
             return char;
         }
     }
    return null;
}

console.log(FindtheFirstNonRepeatingCharacter('swisws'))