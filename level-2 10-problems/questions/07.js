// Create a function that takes an array of string as a input and return a string that appears most often in array

function findFrequentString(arr){
let frequencyCounter ={}; // store

for(const str of arr){
    frequencyCounter[str] = (frequencyCounter[str] || 0) + 1
}

let mostFrequentString ='';
let highFrequency = 0;

for(const str in frequencyCounter){
    if(frequencyCounter[str] > highFrequency){
       highFrequency = frequencyCounter[str] 
       mostFrequentString = str;
    }
}
return mostFrequentString
}

const array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const most = findFrequentString(array);
console.log(most);