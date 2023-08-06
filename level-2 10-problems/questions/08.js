//Create a function that takes an array as a input return new array with only even number

function arrOfEven(arr){
let even =  arr.filter((e)=> e%2 === 0 )

 return even



}

let arrCheck = [2,4,8,1,3,4,5,6];
let find = arrOfEven(arrCheck);
console.log(find);