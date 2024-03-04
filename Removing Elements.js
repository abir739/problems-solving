// Take an array and remove every second element from the array. 
// Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    let newarr = [];
    for(let i=0; i<arr.length; i++){
        if (i % 2==0){ newarr.push(arr[i]);}
    }
    return newarr;
  }
  console.log(removeEveryOther(["n","6","6","t","u","t","p","2"]));

  function removeEveryOther2(arr){
   return arr.filter((x,i) => i%2 === 0);
  }
  console.log(removeEveryOther2(["n","6","6","t","u","t","p","2"]));