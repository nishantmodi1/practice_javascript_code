// Print numbers from 1 to 100, but skip all numbers that are divisible by 5 and continue printing the rest. 

for (let i = 0; i < 100; i++) {
  if(i%5===0){
    continue;
  }else{
    console.log(i)
  }
  
}