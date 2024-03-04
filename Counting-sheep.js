// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(sheep) {
    let nbr = 0;
    if(sheep == null || sheep == undefined){return 0};
    for(let i =0; i< sheep.length;i++){
        if(sheep[i]== true){
            nbr ++;
        }
    }
    return nbr;
  }

function countSheeps2(sheep){
    let counter = 0;

    sheep.map((m)=>{if(m== true) counter++;});
    return counter;
}


  console.log(countSheeps([null,true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));

    console.log(countSheeps2([null,true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true]));