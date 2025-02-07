// Prob 43: Vowel Remover
// create a function to remove the lowercase vowels(a, e, i, o, u)

function shortCut(string) {
//     const arr = ['a', 'e', 'i', 'o', 'u'];
//     let str = string.split('');
// return str.filter(m => !arr.includes(m)).join('');

return string.replace(/[aeiou]/g, '');
}

console.log(shortCut("hello"));