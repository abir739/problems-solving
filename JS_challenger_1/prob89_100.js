// Prob 89- Sum of Multiples  sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
function sumMul(n,m){
    let sum = 0;
    for (let i = n; i< m; i+=n) { // i= 2,   i=4,  i = 6, i = 8
    sum += i;
    }
    return sum;
    }
  console.log(sumMul(3, 13));

// 90- Name on billboard
function billboard(name, price = 30){
let total = 0;
for(let i = 0; i< name.length; i++) {
  total += price;
}
return total;
} 
console.log(billboard("Jeong-Ho Aristotelis"));

// 91- Welcome to the city : ['John', 'Smith'], 'Phoenix', 'Arizona' => Hello, John Smith! Welcome to Phoenix, Arizona!
function sayHello( name, city, state ) {
  return "Hello, " + name.join(' ').concat('!') + " Welcome to " + city.concat(', ') + state.concat('!');
}
console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));

// 92- Remove First and Last Character Part Two "1,2,3,4,5"  =>  "2 3 4"
function array(string) {
  // let arr = [];
  // let str = string.split(',');
  // if(str.length <= 2) {return null} else
  // for(let i = 1; i<str.length-1; i++){
  //    arr.push(str[i]);
  // }
  
  // return arr.join(' ');


    let array = string.split(',');
    return array.length <= 2 ? null : array.slice(1, -1).join(' ');
   

  }
console.log(array('A1,B2,C3'));
console.log(array('A,1,23,456,78,9,Z'));


// Prob 93- Lario and Muigi Pipe Problem  Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
function pipeFix(numbers){
let array = [];
for ( let i = numbers[0]; i<= numbers[numbers.length - 1]; i++) {
 array.push(i);
}
return array;
}
console.log(pipeFix([1,2,3,12]));

// Prob 94- Parse nice int from char problem
function getAge(inputString){
 return Number(inputString.split('')[0]);
  }
  console.log(getAge("4 years old"));

// Prob 95- Grasshopper - Check for factor
function checkForFactor (base, factor) {
  return  base % factor === 0 ? true : false;
 }

// Prob 96- Will there be enough space 
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
  let diff = wait - (cap - on);
return wait > (cap - on) ?  diff  : 0 ;
}

console.log(enough(10, 5, 5));

// Prob 97- Grasshopper - Personalized Message
function greet (name, owner) {
 return name === owner ? "Hello boss" : "Hello guest";
}

// Prob 98- Area or Perimeter
const areaOrPerimeter = function(l , w) {
 return l === w ? l*w : (l + w) * 2;
};

// Prob 99- Well of Ideas Easy Version
function well(x){
let filtredArray =  x.filter((e) => e === 'good');
return filtredArray.length === 0 ? 'Fail!' : filtredArray.length  <= 2
? "Publish!"
: "I smell a series!";
}
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));

// Prob 100- Name Shuffler : "john McClane" --> "McClane john"
function nameShuffler(str){
 return str.split(' ').reverse().join(' ');
}
console.log(nameShuffler('john McClane'));