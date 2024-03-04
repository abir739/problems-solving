// Remove an exclamation mark from the end of a string. 
// For a beginner kata, you can assume that the input data is always a string, 
// no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove (string) {
    return string.replace(/!$/, '');
  }

// The function remove(s) takes a string s as input.
// Inside the function, we use the replace() method with the following regular expression: /!+$/.
// /!+/ matches one or more exclamation marks (!).
// $ specifies the end of the string.
// The empty string '' is used as the replacement, effectively removing any exclamation marks at the end of the string.

  
  function remove2(s) {
    return s.replace(/!+$/, '');
  }

  console.log(remove('Hi!!!')); // Outputs 'Hi!!'
  console.log(remove('!Hi')); // Outputs '!Hi'

  console.log(remove2('Hi!!!')); // Outputs 'Hi'
  console.log(remove2('!Hi')); // Outputs '!Hi'