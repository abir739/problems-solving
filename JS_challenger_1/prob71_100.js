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