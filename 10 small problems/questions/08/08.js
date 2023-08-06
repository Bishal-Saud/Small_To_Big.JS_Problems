// Create a guessing game where the user has to guess to number 1 to 100

const check = document.getElementById("btn");
const result = document.getElementById("result");
console.log("Guess the number 1  to 100");

let count =0;
function randomNumber() {
  let generateNum = Math.floor(Math.random() * 100)+1;
  let input = document.getElementById("user").value;
  let user = parseInt(input);
  if (user === generateNum) {
    result.innerText = `Congrats You guessed : ${generateNum} right `;
    console.log("you guessed right");
  } else {
    count++;
    result.innerText = ` You guessed : wrongNumber ${count} times `;
    // console.log(` You guessed : wrongNumber `);
  }
//   console.log("Answer: ", generateNum);
}
check.addEventListener("click", randomNumber);
// randomNumber()

// DONE ❤️😗