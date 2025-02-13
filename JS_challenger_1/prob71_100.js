// Prob 71- How good are you really
function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((acc, curr) => acc + curr,0)/classPoints.length <= yourPoints;
  }
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21));

// Prob 72- Reversed Words: (reverseWords("hello world!") =>  "world! hello")
function reverseWords(str){
    return str.split(" ").reverse().join(' ');
  }
console.log(reverseWords("hello world!"));

// Prob: 73- Calculate BMI : (bmi = weight / height^2).
function bmi(weight, height) {
// const bmi = weight / (height * height);
const bmi = weight / Math.pow(height, 2);
return bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
  }
console.log(bmi(50, 1.80));
console.log(bmi(80, 1.80));

// Prob : 74- Find numbers which are divisible by given number : [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
function divisibleBy(numbers, divisor){
    return numbers.filter(x => x % divisor === 0);
}
console.log(divisibleBy([1,2,3,4,5,6], 2));

// Prob : 75- Powers of 2 : n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
function powersOfTwo(n){
    let arr = [];
    for(let i = 0; i<= n; i++){
arr.push(Math.pow(2, i));
    }
return arr;
  }
console.log(powersOfTwo(4));

// Prob : 76- Sum The Strings : "34", "5" --> "39"
function sumStr(a,b) {
  return (Number(a) + Number(b)).toString();
}
console.log(sumStr("4","5") + typeof(sumStr("4","5")));

// Prob: 77- Sort and Star
function twoSort(s) {
return s.sort()[0].split('').join('***');
}
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));

// Prob: 78- Expressions Matter
function expressionMatter(a, b, c) {
    let eq1 =  a + b + c;
    let eq2 = a * b * c;
    let eq3 = a * ( b + c );
    let eq4 = c * ( a + b);
    return Math.max(eq1, eq2, eq3, eq4);
  }

// Prob 79- Is it even
function testEven(n) {
    return n % 2 === 0;
 }

// Prob: 80- Filter out the geese
function gooseFilter (birds) {
var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
return birds.filter(x => ! geese.includes(x));

  };
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));

// Prob : 81- What is between a=1, b = 4 => [1,2,3,4]
function between(a,b) {
    let arr = [];
    for(let i = a; i<= b; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(between(1, 4));

// Prob 82- Grasshopper Debug sayHello