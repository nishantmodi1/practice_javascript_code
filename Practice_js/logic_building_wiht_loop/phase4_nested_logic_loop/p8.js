// Print all Pythagorean triplets whose values are less than or equal to n.

const prompt = require("prompt-sync")();

const n = Number(prompt("Enter n: "));

for(let i=1; i<=n; i++){
  for(let j=i; j<=n; j++){
    for(let k=j; k<=n; k++){
      if(i*i + j*j === k*k){
        console.log(`${i} ${j} ${k}`)
      }
    }
  }
}

//approach 2
for (let a = 1; a <= n; a++) {
    for (let b = a; b <= n; b++) {

        let c = Math.sqrt(a * a + b * b);

        if (Number.isInteger(c) && c <= n) {
            console.log(`(${a}, ${b}, ${c})`);
        }
    }
}