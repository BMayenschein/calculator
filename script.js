//Global variables
let prevNumber = 0;
let currentNumber = 0;
let operator = "+";
let ans = 1;

function isFloat(ans) {
    return ans === ans && ans % 1 !== 0;
}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(operator, a, b) {
    let numA = Number(a);
    let numB = Number(b);
    if (operator == "+") {
        ans = add(numA, numB);
        if (isFloat(ans)) {
            return ans.toFixed(2);
        }
        return ans;
    }
    else if (operator == "-") {
        ans = subtract(numA, numbB);
        if (isFloat(ans)) {
            return ans.toFixed(2);
        }
        return ans;
    }
    else if (operator == "*") {
        ans = multiply(numA, numB);
        if (isFloat(ans)) {
            return ans.toFixed(2);
        }
        return ans;
    }
    else if (operator == "/") {
        if (numB === 0) {
            return `You can't divide by 0`
        }
        ans = divide(numA, numB);
        if (isFloat(ans)) {
            return ans.toFixed(2);
        }
        return ans;
    }
}

function updateDisplay(e) {
    display = document.getElementById("display");
    if (display.innerText == 0) {
        display.innerText = " ";
    }
    display.innerText += e.target.id;
    currentNumber = display.innerText;
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", updateDisplay)
})

function operaterPressed(e) {
    display = document.getElementById("display");
    prevNumber = operate(operator, prevNumber, currentNumber);
    operator = e.target.innerText;
    display.innerText = " ";
}

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", operaterPressed)
})

function getAnswer(e) {
    display = document.getElementById('display');
    ans = operate(operator, prevNumber, currentNumber);
    display.innerText = ans;
    return ans;
}
const EQ = document.querySelector(".EQ");
EQ.addEventListener("click", getAnswer);

function reset(e) {
    prevNumber = 0;
    currentNumber = 0;
    operator = "+";
    display = document.getElementById('display');
    display.innerText = " ";

}
const clear = document.querySelector(".clear");
clear.addEventListener("click", reset);
