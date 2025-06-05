let input = document.getElementById("display");
let nums = document.getElementsByClassName("num");
let firstNum;
let op;

const joinToDisplay = (value) => {
    input.value += value;
}
const addOperation = (operator) => {
  firstNum = parseFloat(input.value);
  op = operator;
  input.value = "";
}
const calculate = () => {
    let secondNum = parseFloat(input.value);
    let result = 0;
    switch(op){
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            result = firstNum / secondNum;
            break;
        case "%":
            result = firstNum % secondNum;
            break;
        case "^":
            result = Math.pow(firstNum,secondNum);
            break;
    }
    input.value = result;

    firstNum = 0;
    secondNum= 0;
}

function clearResult() {
    input.value = '';
    firstNumber = null;
    secondNum = null;
    operator = null;
}
const deleteOne = () => {
    input.value = input.value.slice(0,-1);
}