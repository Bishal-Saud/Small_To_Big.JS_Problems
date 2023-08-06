// Create a function that takes and array and return the largest number from array

function arrLargestNumber (arr){
if(!Array.isArray(arr)){
    throw new Error('Input is not an array');
}

if(arr.length === 0){
    return undefined
}
return Math.max(...arr) // 

}

let arrValues = [1,2,3,7,5,]
let largestValue = arrLargestNumber(arrValues);
console.log(largestValue);