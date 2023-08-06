//create a function that takes an array as a string and return a new array that contains only string more than 5 character

function moreThanFiveChar(arr){
    const result = arr.filter((e) => e.length >= 5 )
    return result
}

let array = ['dai','bhai','loves','problems','pain'];
let check = moreThanFiveChar(array);
console.log(check);