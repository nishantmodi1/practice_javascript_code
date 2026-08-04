const prompt = require('prompt-sync')();

const n = Number(prompt("Enter a number: "));

function countNumber(num) {
  let count = 0;

  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }

  return count;
}

function isXyPh(num) {
  let x = 0;
  let y = 0;

  const totalDigits = countNumber(num);
  let c = totalDigits;

  while (num > 0) {
    const digit = num % 10;

    if (c === totalDigits || c === 1) {
      x += digit; // first and last digit
    } else {
      y += digit; // middle digits
    }

    num = Math.floor(num / 10);
    c--;
  }

  return x === y ? "Xylem" : "Phloem";
}

console.log(isXyPh(n));