//Create a function that takes array as a input and return smallest value from array

function smallestNumber(arr){
if(!Array.isArray(arr)){
    throw new Error("Input is not an array");
}
if(arr.length === 0){
    return undefined
}

let smValue = Math.min(...arr);
return smValue

}

let arry = [25,22,54,374,11,44];
let smFunc = smallestNumber(arry);
console.log(smFunc);