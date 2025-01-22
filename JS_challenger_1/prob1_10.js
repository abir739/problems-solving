// Prob 1: Even Odd
/* Create a function that takes integer as an argument and returns "Even" for even numbers and "odd" for odd numbers*/

function evenOdd(number) {
   return (number%2 == 0 )?  "even" : "odd";
}

console.log(evenOdd(8));
console.log(evenOdd(9));

// Prob 2: Sum of positive
/* you get an array of numbers, return the sum of all the positives ones*/

function sumOfPositive(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
         sum += arr[i];   
        }
    }
     return sum;
}

console.log(sumOfPositive([0,2,4,-3]));
console.log(sumOfPositive([7, -3, 5, 9]));

// Prob 3: Sum-Without-The-Highest-And-The-Lowest-Number
function sumArray(array) {
if (array == null) return 0;
// return array.filter((x) => x !== Math.max(...array) && x !== Math.min(...array)).reduce((acc, curr) => acc + curr, 0);

return array.sort((a,b) => a-b).slice(1, -1).reduce((acc, curr) => acc + curr, 0);
// let max = Math.max(...array);
// let min = Math.min(...array);
// let filtredArray = array.filter((x) => x !== max && x !== min);
// let sum = filtredArray.reduce((acc, curr) => acc + curr, 0);
// return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 9, 1, 9, 1]));



// // Ascending order
// const numbers = [10, 2, 30];
// numbers.sort((a, b) => a - b);
// // [2, 10, 30]

// // Descending order
// numbers.sort((a, b) => b - a);
// // [30, 10, 2]


// const people = [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 35 }
// ];

// // Sort by age
// people.sort((a, b) => a.age - b.age);

// // Sort by name
// people.sort((a, b) => a.name.localeCompare(b.name));