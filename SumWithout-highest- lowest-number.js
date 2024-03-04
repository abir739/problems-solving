// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

//Input validation
// If an empty value ( null, None, Nothing etc. )
// is given instead of an array, or the given array is an empty list or a list
// with only 1 element, return 0.

//1- empty value return 0
//2- find the max
//3- find the min
//4-sum all the elmts without max and min => Filter the array


//this function will Sum all the elements in the array except for the highest and lowest values
function sumArray1(arr){
    if(arr == null){return 0;}
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    console.log(max, min);
    return arr.filter(x => x != max && x != min)
    .reduce((acc, current)=> acc + current,0);

}


//this function will sum all elements except the highest and lowest values, even if they are repeated
function sumArray2(array) {
    if(array == null || array.length<2){return 0;}
    const highest = Math.max(...array);
    const lowest = Math.min(...array);
   
    
     const sum = array.reduce((accumulator, currentValue) => {
       return accumulator + currentValue;
     }, 0);
   
    return sum - highest - lowest;
   }

//the sumArray3 function  sorts the array, removes the highest and lowest elements, and calculates the sum of the remaining values😊
   function sumArray3(array) {

    if(array == null) return 0;
    return array.sort((a,b)=> a-b)
    .slice(1,-1)
    .reduce((acc, current)=>acc + current,0);
  }

console.log(sumArray1([1,3,5,9,1,1]));//8
console.log(sumArray2([1,3,5,9,1,1]));//10
console.log(sumArray3([1,3,5,9,1,1]));//10

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const sortedFruits = fruits.slice().sort(); // Creates a sorted copy : method arranges the elements
console.log(sortedFruits); // ["Apple", "Banana", "Lemon", "Mango", "Orange"]

const numbers1 = [10, 2, 8, 5, 3];
const sortedNumbers = numbers1.slice().sort((a, b) => a - b);
console.log(sortedNumbers); // [2, 3, 5, 8, 10]


// Syntax: array.slice(start, end)
// start: Optional. Start position (default is 0). Negative values select from the end of the array.
// end: Optional. End position (default is the last element). Negative values select from the end of the array.

const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits1.slice(1, 3); // ["Orange", "Lemon"]
const myBest = fruits1.slice(-3, -1); // ["Lemon", "Apple"]
