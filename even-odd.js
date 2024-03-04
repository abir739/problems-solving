//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOdd1(number){
    if(number % 2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
}

function evenOdd2(value){
    return value % 2 == 0 ? "Even" : "Odd";
}

//The filter() method is used to create a new array by selecting elements from an existing array based on a specified condition.

//The reduce() method reduces an array of values down to a single value.
//It runs a reducer function on each element of the array, accumulating a result.

function evenArr(arr){
    return arr.filter(x => x%2 == 0)
    .reduce((acc, current)=> acc + current,2);
}

console.log(evenOdd1(5));
console.log(evenOdd1(6));
console.log(evenOdd2(8));
console.log(evenArr([1,2,5,0,8]));


// const result = originalArray.reduce((accumulator, currentValue, index, array) => {
//     // Perform some operation and return the updated accumulator
//   }, initialValue);

//Example: Let’s calculate the sum of all numbers in an array:

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10
