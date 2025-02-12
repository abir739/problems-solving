// Prob 43: Vowel Remover
// create a function to remove the lowercase vowels(a, e, i, o, u)

function shortCut(string) {
//     const arr = ['a', 'e', 'i', 'o', 'u'];
//     let str = string.split('');
// return str.filter(m => !arr.includes(m)).join('');

return string.replace(/[aeiou]/g, '');
}

console.log(shortCut("hello"));

// Prob 44 : Remove exclamation marks
function removeExclamationMarks(s) {
    // return s.split('').filter((x) => x !== '!').join('');
    // return s.replace(/[!]/g, '');
    return s.split('!').join('');
}
console.log(removeExclamationMarks("Hello! World!!"));

// Prob 45: Reserved strings
function solution(str){
  return str.split('').reverse().join('');
}
console.log(solution('world'));

// Prob 46: Beginner rteduce but grow
// Given a non-empty array of integers, 
// return the result of multiplying the values together in order. 
// Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
    return x === null ? 0 : x.reduce((acc, curr) => acc * curr, 1);
}
console.log(grow([2, 2, 2, 2, 2, 2]));

// Prob 47: Is it a palindrome
function isPalindrome(x) {
  x = x.toLowerCase();
  str = x.split('').reverse().join('');
  return x === str ? true : false;
  }

  console.log(isPalindrome("a"));
  console.log(isPalindrome("aba"));
  console.log(isPalindrome("hello"));

// Prob 48: Grasshopper- summation
var summation = function (num) {
  let sum =0;
  for(let i = 0; i<= num; i++) {
    sum += i;
  }
  return sum;
}

//prob 49: Printing Array elements with Comma delimiters : ["h","o","l","a"] => "h,o,l,a"
function printArray(array){
  //show me the code!
  return array.join(',');
}
console.log(printArray(["h","o","l","a"]));

// Prtob 50: How Many Stairs Will Suzuki Climb in 20 years

var sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
  7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063,
  5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496,
  6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
  monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
      6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221,
      5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
      7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
  tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
      7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
      7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493,
      5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
  wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102,
      5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
      5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698,
      9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
  thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
      9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
      9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066,
      7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
  friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362,
      6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501,
      9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
      5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
  saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943,
      5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003,
      5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838,
      7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];
let stairs = [saturday, sunday, monday, tuesday, wednesday, thursday, friday];

function stairsIn20(s){
// return s.flat().reduce((acc, curr) => acc + curr, 0) * 20;
return s.reduce((acc, curr) => [...acc, ...curr], []).reduce((acc, curr) => acc + curr, 0) * 20;
}
console.log(stairsIn20(stairs));

// 51- Remove First and Last Character
function removeChar(str){
// let arr = str.split('');
// arr.pop();
// arr.shift();
// return arr.join('');

return str.slice(1, -1);
// return str.substring(1, str.length -1);

 };
 console.log(removeChar("chai"));

 // 52- Square(n) Sum 
 function squareSum(numbers){
 return numbers.map(x => x*x).reduce((acc, curr) => acc + curr, 0);
 }
 console.log(squareSum([1,2,2]));

 // 53- Find the smallest integer in the array
 function findSmallestInt(arr) {
// return arr.sort((a,b) => a-b).shift();
return Math.min(...arr);
}
console.log(findSmallestInt([78,56,232,12,8]));

// 54- Is n divisible by x and y : n =   3, x = 1, y = 3 =>  true  ,  n = 100, x = 5, y = 3 => false
function isDivisible(n, x, y) {
  return n % x == 0 && n % y == 0 ? true : false;
}
console.log(isDivisible(3,1,3));
console.log(isDivisible(100,5,3));

// 55- Beginner Lost Without a Map
function maps(x){
return x.map(m => m*2);
}
console.log(maps([1, 2, 3]));

// 56- Fake Binary : ('45385593107843568') => '01011110001100111')
function fakeBin(x){
 return x.split('').map(m => m < 5 ? 0 : 1).join('');
// return x.replace(/[1-4]/g, '0').replace(/[5-9]/g, '1');
}
console.log(fakeBin('45385593107843568'));

// Prob : 57- Sum Arrays
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer.
//  If the array does not contain any numbers then you should return 0.

function sumArray(numbers) {
if(numbers.length <= 0) {return 0;}
return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([]));
console.log(sumArray([2,3,5,-1]));

// Prob 58- Simple multiplication
function simpleMultiplication(number) {
return number % 2 == 0 ? number * 8 : number * 9;
}
console.log(simpleMultiplication(2));
console.log(simpleMultiplication(1));

// Prob 59- MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase();
}
console.log(makeUpperCase("hello"));

// Prob 60- Array plus array
function arrayPlusArray(arr1, arr2) {
  return [...arr1 , ...arr2].reduce((acc, curr) => acc + curr, 0);
  // return arr1.concat(arr2).reduce((acc, curr) => acc + curr, 0);
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// Prob 61- Sum Mixed Array
function sumMix(x){
  // return x.map(m => Number(m)).reduce((acc, curr) => acc + curr, 0);
return x.reduce((acc, curr) => Number(acc) + Number(curr), 0);
}
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

// Prob 62- The Feast of Many Beasts : he dish must start and end with the same letters as the animal's name
function feast(beast, dish) {
// let arr1 = beast.split("");
// let arr2 = dish.split("");
// return arr1[0][0] == arr2[0][0] && arr1[arr1.length-1][arr1[arr1.length-1].length-1] == arr2[arr2.length-1][arr2[arr2.length-1].length-1];

return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
// let letters1 = beast[0] + beast[beast.length - 1];
// let letters2 = dish[0] + dish[dish.length - 1];
// return letters1 === letters2;
  }
console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));

// Prob 63- Thinkful Logic Drills Traffic light
function updateLight(current) {
switch(current) {
  case "green" : return " yellow";
  case "yellow": return "red";
  case "red": return "green";
  default: return "invalid color";
}
}
console.log(updateLight("green"));

 // Prob 64- L1 Set Alarm
 function setAlarm(employed, vacation) {
  return employed === true && employed !== vacation;
  // return employed && !vacation;
 }
 console.log(setAlarm(true, true));
 console.log(setAlarm(false, true));
 console.log(setAlarm(false, false));
 console.log(setAlarm(true, false));

 // Prob 65- Quarter of the year
 const quarterOf = (month) => {
  // return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
  return Math.ceil(month / 3);
// switch(month) {
//   case 1:
//   case 2:
//   case 3: 
//   return 1;
//   case 4:
//   case 5:
//   case 6: 
//     return 2;
//   case 7:
//   case 8:
//   case 9: 
//     return 3;
//   case 10:
//   case 11:
//   case 12: 
//     return 4;
// }
  
}
console.log(quarterOf(3));
console.log(quarterOf(8));
console.log(quarterOf(11));

// Prob 66- AddLength , exemple: "apple ban" --> ["apple 5", "ban 3"] "you will win" -->["you 3", "will 4", "win 3"]
function addLength(str) {
  return str.split(" ").map(x => x +" " + x.length);
  }
console.log(addLength("apple ban"));

// Prob 67 -How many lightsabers do you own
function howManyLightsabersDoYouOwn(name) {
  return /Zach/.test(name) ? 18 : 0;
}
console.log(howManyLightsabersDoYouOwn());
console.log(howManyLightsabersDoYouOwn("Adam"));
console.log(howManyLightsabersDoYouOwn("Zach"));

// Prob 68- Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  // return Math.abs(sonYearsOld * 2 - dadYearsOld);
 return sonYearsOld * 2 < dadYearsOld ? dadYearsOld - sonYearsOld * 2 : sonYearsOld * 2 > dadYearsOld ? sonYearsOld * 2 - dadYearsOld : 0 ;
}

// Prob 69- Keep up the hoop
function hoopCount (n) {
  return n < 10 ?  "Keep at it until you get it" :  "Great, now move on to tricks";
}

// Prob 70- Character Recognition
function correct(string)
{
  const chars = {
    '0' : 'O',
    '1' : 'I',
    '5' : 'S'
  }
  return string.replace(/[501]/g, x => chars[x]);
	// return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
}
console.log(correct("L0ND0N"));
console.log(correct("51NGAP0RE"));