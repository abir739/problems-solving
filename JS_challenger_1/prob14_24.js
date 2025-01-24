// Prob 14: To Square Root Or Not To Square Root 
function squareOrSquareRoot(array) {
    return array.map((m) => Number.isInteger(Math.sqrt(m)) ? Math.sqrt(m) : m * m);
 }
 
 console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

// Prob 15: Count By X
function countBy(n, x) {
    // let array = [];
    // for(let i = 1; i <= x; i++) {
    //   array.push(n * i);
    // }
    // return array;

    return Array.from(Array(x+1).keys()).slice(1).map((nbr) => nbr * n);
}
console.log(countBy(3,5));

// Prob 16: Remove String Spaces

function removeSpaces(str) {
    return str.split(" ").join("");
}
console.log(removeSpaces("A B I R"));

// Prob 17: Invert Values
function invertValue(array) {
    return array.map((m) => -m);
}
console.log(invertValue([1, -2, 3, -4, 0, 7]));

// Prob 18: Convert boolean values to strings 'Yes' or 'No' 
function boolToWord(bool) {
    return bool ? "Yes" : "No";
}
console.log(boolToWord(true));
console.log(boolToWord(false));

// Prob 19: Reversing Words in a String
function reverseWords(str) {
    // let array = str.split("");
    // let str1= array.slice(0,array.indexOf(" ")).join("");
    // let str2 = array.slice(array.indexOf(" ")+1, array.length).join("");
    // return str2 +" "+ str1;

    return str.split(" ").reverse().join(" ");
}
console.log(reverseWords("Hello abir"));


// Prob 20: Keep Hydrated: Nathan drinks 0.5 litres of water per hour
function litres(time) {
    return Math.floor(time * 0.5);
}
console.log(litres(3));
console.log(litres(11.8));

// Prob 21: Convert a Number to a String
function numberToString(number) {
    // return number.toString();
    return `${number}`;
}
console.log(typeof numberToString(20987) + numberToString(20987));

// Prob 22:  Calculate average

function average(array) {
    return array === null?  0 : array.reduce((acc, curr) => acc+curr,0) / array.length ;
}
console.log(average([1,2,3, 4, 10]));
console.log(average([]));
console.log(average([1,2,3]));

// Prob 23- Convert a String to a Number
function stringToNumber(str) {
    return Number(str);
    // return +str;
}
console.log(typeof stringToNumber("12345") + stringToNumber("12345"));

// Prob 24- Count The Monkeys
function monkeyCount(n) {
    let array = [];
    for (let i=1; i<=n; i++){ array.push(i);}
    return array;
}
console.log(monkeyCount(10));

// Prob 25- Welcome