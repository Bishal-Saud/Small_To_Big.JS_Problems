// Create a simple HTML FORM and then use javascript to validate the user's input

const submit = document.getElementById('submit')

function run(){
    const names = document.getElementById('name').value
    const email = document.getElementById('email').value
    const number = document.getElementById('number').value
    
if(names == ''||email== ''||number== ''){
alert('Empty')
return false
} 
 if(number < 0 || number > 11){
    alert('Invalid number ')
return false
} else{

    alert('sucessfully done')
}

}

 submit.addEventListener('click',run)
