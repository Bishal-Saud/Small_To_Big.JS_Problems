// Create a function that takes an array of numbers as a input and return the average of the numbers in array

function averageInArray(arr){
    // let arry = new Array(arr);
    if(arr.length == 0){
        return 0
    }

    let sum = arr.reduce( (previousValue,currentValue) => previousValue + currentValue,0)
    let average = sum/arr.length

    return average
}

// let numbers = [1,2,3,4,5,5,6,4]
console.log(averageInArray([1,2,3,4,5,5,6,4]));