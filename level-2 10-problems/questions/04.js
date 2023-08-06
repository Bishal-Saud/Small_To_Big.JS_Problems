// Create a function that takes input as a string and return it reversed

function reversedString(str){
    // split is used to split word in array ['a','b','c'..]
let splitStr = str.split('');
    // reverse is used to reverse word in array ['c','b','a'..]
let reversedStr = splitStr.reverse();
// join it
let joinStr = reversedStr.join('');

return joinStr
}

console.log(reversedString('Bishal'));