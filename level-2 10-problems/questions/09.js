//Create a function that takes an array as a input return new array with only odd number

function arrOfodd(arr){
    let odd =  arr.filter((e)=> e%2 !== 0 )
    
     return odd
    
    
    
    }
    
    let arrCheck = [2,4,8,1,3,4,5,6];
    let find = arrOfodd(arrCheck);
    console.log(find);