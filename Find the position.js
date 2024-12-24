// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// METHODE 1:

function position(letter) {
    const charCode = letter.charCodeAt(0); // Get UTF code of the character
    const position = charCode - 96; // Subtract 96 to get the position
    // return `Position of alphabet: ${position}`;
    return 'Position of alphabet: '+position;
}

// Example usage:
console.log(position('a')); // Output: "Position of alphabet: 1"
console.log(position('z')); // Output: "Position of alphabet: 26"


//METHODE 2:
