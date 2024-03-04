// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function sumOfPositive(arr){
    let initValue = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i] > 0){ initValue += arr[i];}
       
    }
    return initValue;
}

function positiveSum(arr){
    return arr.filter(x => x>0)
    .reduce((acc, current) => acc + current, 0);
    //acc pour donne le elmt avec lequel on start, dans notre cas c la valeur initiel 0
    // current c le debut du tableau

}
console.log(sumOfPositive([-1,3,0,-4,9]));
console.log(positiveSum([-1,-3,9,2,3]));