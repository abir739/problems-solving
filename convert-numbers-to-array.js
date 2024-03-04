// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]




// n.toString(): Converts the input number n to a string.
// .split(""): Splits the string into an array of individual characters (digits).
// .map((m) => Number(m)): Maps each character (digit) to its numeric value by converting it back to a number.
// .reverse(): Reverses the order of the array elements.
function reversedNumToarray(n){
   return n.toString().split("").map((m)=>Number(m)).reverse();

}
console.log(reversedNumToarray(123));

// reversed number but not to array
function reversedNum(n){
    let reversedNbr = n.toString().split("").map((m)=>Number(m)).reverse();
    return parseFloat(reversedNbr.join(""));
}

console.log(reversedNum(12345));