// Create a simple animation using js 
const square = document.getElementById('square')
let position =0;

function animateSqure(){
    square.style.bottom = position + 'px'
    // square.style.left = position + 'px'
    square.style.right = position + 'px'

position += 4;
requestAnimationFrame(animateSqure)

const screenWidth = window.innerWidth;
if(position > screenWidth){
    position -=1200;
}
}

animateSqure()