// Print a matrix, then calculate and display the sum of each row and the sum of each column.

const prompt = require("prompt-sync")();

const rows = Number(prompt("Enter number of rows: "));
const cols = Number(prompt("Enter number of columns: "));

let arr = [];
let colSum = new Array(cols).fill(0);

console.log("Enter the matrix elements:");

for (let i = 0; i < rows; i++) {
    arr[i] = [];
    let rowSum = 0;

    for (let j = 0; j < cols; j++) {
        arr[i][j] = Number(prompt(`Element [${i + 1}][${j + 1}]: `));

        rowSum += arr[i][j];
        colSum[j] += arr[i][j];
    }

    console.log(`Row ${i + 1} Sum = ${rowSum}`);
}

console.log("\nMatrix:");
for (let i = 0; i < rows; i++) {
    let str = "";
    for (let j = 0; j < cols; j++) {
        str += arr[i][j] + " ";
    }
    console.log(str);
}

console.log("\nColumn Sums:");
for (let j = 0; j < cols; j++) {
    console.log(`Column ${j + 1} Sum = ${colSum[j]}`);
}