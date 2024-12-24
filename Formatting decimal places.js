// Each number should be formatted that it is rounded to two decimal places. 
// You don't need to check whether the input is a valid number because only 
// valid numbers are used in the tests.

// Example:    
// 5.5589 is rounded 5.56   
// 3.3424 is rounded 3.34

function twoDecimalPlaces(n) {

// return Math.round(n*100) / 100;
// return parseFloat(n.toFixed(2)); //  converts the result of n.toFixed(2) into a floating-point number.
   return Number(n.toFixed(2)); // converts the result of n.toFixed(2) (which is a string with two decimal places) into a numeric value.


  }

  console.log(twoDecimalPlaces(5.5589));
  console.log(twoDecimalPlaces(3.3424));

const num1 = Number("3.23"); // Result: 3.23
const num2 = Number("3.23abc"); // Result: NaN

const num3 = parseFloat("3.23"); // Result: 3.23
const num4 = parseFloat("3.23abc"); // Result: 3.23 (ignores "abc")
