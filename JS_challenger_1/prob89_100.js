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