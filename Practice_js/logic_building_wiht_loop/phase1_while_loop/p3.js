// 3. Print all even numbers between 1 and 100.

function printEven() {
  let n=1
  while(n<=100){
    if(n%2===0){
      console.log(n)
    }
    n++
  }
}

printEven();