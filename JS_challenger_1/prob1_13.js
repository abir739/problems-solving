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


// Prob 4: Repeat String

function repeatString(number, strg) {

    return strg.repeat(number);
    // let newStrg = "";
    // for ( let i = 0; i < number; i++) {
    //    newStrg +=  strg;
    // }
    // return newStrg;
}

console.log(repeatString(3, "abir"));

//Prob 5: Convert number to reserved array of digits
// split the string to an array: split
// change the strings to numbers: map + Number
 function convertToArray(number) {
return number.toString().split("").map((x) => Number(x)).reverse();
 }

 console.log(convertToArray(123456));

 // Prob 6: counting sheep: number of true in the array

 function countSheep(array) {
    let nb = 0;
array.map((x) => x === true ? nb++ : 0);
return nb;
 }
 console.log(countSheep([true, true, true, false, true, false, true]));


 // prob 7: Get Opposite

function getopposite(x) {
    return -x;
}

 console.log(getopposite(-34));

// Prob 8: Return Negative
function returnnegative(number) {
  return  (number == 0 || number < 0) ? number : -number;

}
console.log(returnnegative(1));
console.log(returnnegative(-5));
console.log(returnnegative(0));
console.log(returnnegative(0.12));

// Prob 9: retrun a greeting for a user, if is Johnny, greet him slightly
function greet(name) {
    return (name === "Johnny") ? "Hello, my Love!" : "Hello, " + name +"!";
}
console.log(greet("Johnny"));
console.log(greet("Abir"));

// Prob 10: found the needle and its position
function foundNeedle(array) {
    return "found the needle at position " + array.indexOf("needle");
}
console.log(
    foundNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
  );


// Prob 11: Count-of-positives-sum-of-negatives
function countPositiveSumNegative(array) {
    // let positive = array.filter((x) => x > 0).length;
    // let sumNeg = array.filter((x) => x < 0).reduce((acc, curr) => acc+curr,0);
let positive = 0;
let sumNeg = 0;
for (let i= 0; i< array.length; i++) {
    if(array[i] > 0) {
        positive ++;
    } else {
        sumNeg += array[i];
    }
}
    return [positive, sumNeg];

}

console.log(
    countPositiveSumNegative([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
    ])
  );

// Prob 12: double char

function doubleChar(str){
    return str.split("").map((m) => m.repeat(2)).join("");
}
console.log(doubleChar("Abir"));
console.log(doubleChar("112345!"));

// Prob 13:  Four Basic Mathematical Operations: +, -, *, /

function basicOperation(operation, number1, number2) {
    // if(operation == "+") return number1 + number2;
    // if(operation == "-") return number1 - number2;
    // if(operation == "*") return number1 * number2;
    // if(operation == "/") return number1 / number2;

    switch(operation) {
        case '+': return number1 + number2;
        case '-': return number1 - number2;
        case '*': return number1 * number2;
        case '/': return number1 / number2;
        default: throw new Error('invalid operation');
    }
}
console.log(basicOperation("*", 9, 6));
console.log(basicOperation("%", 9, 6));
