// Print numbers from 1 to 100, and stop the loop as soon as a number divisible by 17 is encountered. 

for (let i = 1; i <= 100; i++) {
  if(i%17===0){
    break
  }else{
    console.log(i)
  }
  
}