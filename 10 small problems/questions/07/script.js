// simple calculator that can add,subtract,multiple and divide
;

function calculate() {
    let inp1 = document.getElementById("num1");
let inp2 = document.getElementById("num2");
let val1 = parseInt(inp1.value);
let val2 = parseInt(inp2.value);

  const operator = document.getElementById("operator").value;
  let result;
  switch (operator) {
    case "add":
      result = val1 + val2;
      break;
    case "subtract":
      result = val1 - val2;
      break;
    case "multiple":
      result = val1 * val2;
      break;
    case "divide":
      result = val1 / val2;
      break;
    default:
      result= "Invalid operator";
      break;
  }
  document.getElementById('result').innerText = `Result : ${result}`
}
// done but copied from chatgpt
