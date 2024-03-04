// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    let sum = 0;
  if(array === null || array.length === 0){return 0;}
  else{
    for(let i=0; i<array.length; i++){
sum += array[i];
    }
  }
  return sum / array.length;
  }
console.log(findAverage([1,2,3,4,5,6,7]));

function findAverage2(array) {
 return array.reduce((acc, current) => acc + current, 0) / array.length; 
  }
  console.log(findAverage2([1,2,3,4,5,6,7]));