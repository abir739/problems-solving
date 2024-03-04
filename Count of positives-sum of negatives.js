// Given an array of integers.

// Return an array, where the first element is the count of positives numbers
//  and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    let countPos = 0;
    let sumNeg = 0;

    if (input == null || input.length == 0)
    return [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            countPos++;
        } else if (input[i] < 0) {
            sumNeg += input[i];
        }
    }
    return [countPos, sumNeg];
}


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives( [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));

function countPossumneg(input){
    let countPost = input.filter((x) => x>0).length;
    let sumNeg = input.filter((x) => x<0).reduce((acc, current)=> acc + current, 0);

    return [countPost, sumNeg];
}

console.log(countPossumneg([1,2,3,-1,-1,-1]));