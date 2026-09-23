
function DiamondPattern(n){
  let sp=Math.floor(n/2); let st='*';
  //top pyramid
  for(let i=0; i<=sp; i++){
    let row=''
    for(let j=0; j<sp-i; j++){
      row+='  '
    }
    for(let j=0; j<2*i+1; j++){
      row+='* '
    }
    console.log(row)
  }
  //bottom piramid
  for(let i=sp-1; i>=0; i--){
    let row=''
    for(let j=0; j<sp-i; j++){
      row+='  '
    }
    for(let j=0; j<2*i+1; j++){
      row+='* '
    }
    
    console.log(row)
  }
}
DiamondPattern(9)

// function NumberTriangle(n){
//   for(let i=0; i<n; i++){
//     let row=''
//     for(let j=0; j<=i; j++){
//       row+=(j+1+" ")
//     }
//     console.log(row)
//   }
// }
// NumberTriangle(5)

// function RectanglePattern(n){
//   for(let i=0; i<n; i++){
//     let row=''
//     for(let j=0; j<n; j++){
//       row+=' *'
//     }
//     console.log(row)
//   }
// }
// RectanglePattern(5)

// function RightTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     // Create a string with 'i' number of stars
//     let row = '';
//     // for (let j = 1; j <= n-i; j++) {
//     //   row += ' ';
//     // }
//     for (let j = 1; j <= i; j++) {
//       row += '*';
//     }
//     console.log(row);
//   }
// }

// RightTriangle(5);