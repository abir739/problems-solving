// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

//Methode 1:
function noBoringZeros(n) {
  let str = String(n);
  while(str.endsWith(0)){
    str = str.slice(0, -1);
  }
  return Number(str);
  }

  //Methode 2:
function noBoringZeros2(n) {
    return Number(n.toString().replace(/(?!^0$)(?:0+$)/, ""));
    }