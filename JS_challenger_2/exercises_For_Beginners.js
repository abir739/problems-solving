// Exercice 1: 
/* write a JS program to check two numbers and return true if one of the number is 100 
or if the sum of the two num,bers is 100
*/

const checkNumbers = (nb1, nb2) => nb1 === 100 || nb2 === 100 || nb1 + nb2 === 100;
// function checkNumbers(nb1, nb2) {
//     return nb1 === 100 || nb2 === 100 || nb1 + nb2 === 100 ? true : false;
// }

console.log(checkNumbers(10, 50));

// Exercice 2: 
/* write a JS program to get the extension of filename : .html, .js, ...
*/
const getExtension = (fileName) => fileName.slice(fileName.lastIndexOf('.'));

console.log(getExtension('index.html'));

// Exercice 3: 
/* write a JS program to replace every character
in a given string with the character following it in the alphabet
*/

function shiftAlphabet(str) {
    let arr = str.split('');
    return arr.map(char => {
        // first check if the character is letter or nott
        if(char.match(/[a-z]/i)) {
            if(char.toLowerCase() === 'z') {
                return char === char.toLowerCase() ? 'a' : 'A';
            } else {
               return String.fromCharCode(char.charCodeAt(0) + 1);
            }
        } else {
            return char;
        }

    }).join('');
}
console.log(shiftAlphabet('Ab-ir'));

// Exercice 4: 
/* write a JS program to get the current date.
Expected Output : 
mm-dd-yyyy, mm/dd/yyyy, or dd-mm-yyyy, dd/mm/yyyy
*/

const currentDate = (formatDate) => {
    const date = new Date;
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    switch (formatDate) {
        case 'mm-dd-yyyy':
            return `${month}-${day}-${year}`;
        case 'mm/dd/yyyy':
            return `${month}/${day}/${year}`;

        case 'dd-mm-yyyy':
            return `${day}-${month}-${year}`;

        case 'dd/mm/yyyy':
            return `${day}/${month}/${year}`;
        default:
            throw new Error("Invalid date forma");
    }
    
}
console.log(currentDate('mm-dd-yyyy'));

// Exercice 5: 
/* write a JS program to create a new string adding "New!" in front of a given string.
If the given string begins with "New!" already then return the original string.
*/

const addingNew = (str) =>  /^New!/.test(str) ? str : 'New! ' + str;

console.log(addingNew('dayNew!'));

// Exercice 6: 
/* write a JS program to create new string from a given string taking 
the first 3 characters and the last 3 characters of string and adding
them together. the string length must be 3 or more, if not, the original string is returned.
*/

const createNewString = (str) => str.length < 3 ? str : str.slice(0,3) + str.slice(-3);
 console.log(createNewString('abc123abc123'));

// Exercice 7: 
/* write a JS program to extract the first half of a string of even length
*/
 const halfString = (str) => str.slice(0, str.length / 2);

 console.log(halfString('abcdef'));

 // Exercice 8: 
/* write a JS program to concatenate two strings except their first character
*/


const concatenateStrings = (str1, str2) => str1.slice(1) + str2.slice(1);

console.log(concatenateStrings('abc', 'def'));

// Exercice 9: 
/* Given two value,
write a JS program to find out which one is nearest to 100
*/

const nearestTo100 = (val1, val2) => Math.abs(val1 - 100) < Math.abs(val2 - 100) ? val1 : val2;

console.log(nearestTo100(110, 60));

// Exercice 10: 
/* write a JS program to check a given string contains 2 to 4 occurrences
of a specified character.*/

function contains2To4(str, char) {
    const countChars = (str, char) => str.split('').filter(c => c === char).length;

    return countChars(str, char) >=2 && countChars(str, char) <= 4;
}

console.log(contains2To4('ooh!', 'o'));
console.log(contains2To4('ooooh!', 'o'));
console.log(contains2To4('oooooh!', 'o'));
console.log(contains2To4('oh!', 'o'));
