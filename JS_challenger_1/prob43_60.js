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