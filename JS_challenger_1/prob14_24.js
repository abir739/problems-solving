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

// Prob 25- Welcome: Write a 'welcome' function that takes a parameter 'language',
// with a type String, and returns a greeting - if you have it in your database.
// It should default to English if the language is not in the database, or in the event of an invalid input.

// hasOwnProperty() checks if an object has a specific property directly on itself, not inherited from prototype chain

function welcome(language) {
    let obj = {
        english: "Welcome",
        czech: "Vitejte",
        danish: "Velkomst",
        dutch: "Welkom",
        estonian: "Tere tulemast",
        finnish: "Tervetuloa",
        flemish: "Welgekomen",
        french: "Bienvenue",
        german: "Willkommen",
        irish: "Failte",
        italian: "Benvenuto",
        latvian: "Gaidits",
        lithuanian: "Laukiamas",
        polish: "Witamy",
        spanish: "Bienvenido",
        swedish: "Valkommen",
        welsh: "Croeso",        
    };
if(obj.hasOwnProperty(language)) {
    return obj[language];
} else {
    return obj["english"];
}
}
console.log(welcome("dutch"));
console.log(welcome("arabic"))

// Prob 26: Sentence Smash
function smash(words) {
    return words.join(" ");
}
console.log(smash(['Bonjour', 'Abir', 'CV', 'tout', 'bien', '?']));

// Prob 27: Switch It Up: return the numbers in words
function switchItUp(number) {
    let numbers = {
        0:"Zero",
        1:"One",
        2:"Two",
        3:"Three",
        4:"Four",
        5:"Five",
        6:"Six",
        7:"Seven",
        8:"Eight",
        9:"Nine"
    };
return numbers[number]  ;

// switch (number) {
//     case 0: return "Zero"; break;
//     case 1: return "One"; break;
//     case 2: return "Two"; break;
//     case 3: return "Three"; break;
//     default: return "Wrong Nummber";

// }

}
console.log(switchItUp(6));

// Prob 28: Do I Get A Bonus
function bonusTime(salary, bonus){
    return bonus? "\u00A2"+salary*10 : "\u00A2"+salary;
}
console.log(bonusTime(1500, true));
console.log(bonusTime(500, false));

// Prob 29: Exclamation marks
function remove(str) {
    return str.replace(/!$/, "");
}
console.log(remove("!Hi, Abir!!"));

// Prob 30: play banjo?
function playBanjo(name) {
    // return (name[0] === "r" || name[0] === "R") ? `${name} plays Banjo`: `${name} does not play banjo`;
return (/^r/i).test(name)  ? `${name} plays Banjo`: `${name} does not play banjo`;
}
console.log(playBanjo("Rami"));

// Prob 31: Removing Elements: always keep the first elmt and remove the second elmt
function removeSecond(array) {
//     let newArray = [];
//     for(let i= 0; i<array.length; i++){

// if(i%2 === 0) {newArray.push(array[i]); }
// }
// return newArray;
return array.filter(m => array.indexOf(m)%2===0);
}
console.log(removeSecond(["keep","remove","keep","remove","keep","remove",]))