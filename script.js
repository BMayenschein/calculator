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
        return add(numA, numB);
    }
    else if (operator == "-") {
        return subtract(numA, numB);
    }
    else if (operator == "*") {
        return multiply(numA, numB);
    }
    else if (operator == "/") {
        return divide(numA, numB);
    }
}

let g_Operator = '+';
let g_a = '0';
let g_b = '0';

function updateDisplay(e) {
    display = document.getElementById('display');
    display.innerText = display.innerText + e.target.id;
}

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener("click", updateDisplay)
});


function oper(e) {
    display = document.getElementById('display');
    g_b = display.innerText;
    g_a = operate(g_Operator, g_a, g_b);
    g_Operator = e.target.innerText;
    display.innerText = " ";
}

function clear() {
    display = document.getElementById('display');
    display.innerText = ' ';
    g_a = 0;
    g_b = 0;
}

const clearscreen = document.getElementById('ac');
clearscreen.addEventListener('click', clear);

function getEqual(operator, a) {
    let b = document.getElementById('display').innerText;
    console.log(operate(g_Operator, g_a, b));
    ans = operate(g_Operator, g_a, b);
    display = document.getElementById('display');
    display.innerText = ans;

}

const EQ = document.getElementById('EQ');
EQ.addEventListener("click", getEqual);

const op = document.querySelectorAll('.operator');
op.forEach((op) => {
    op.addEventListener("click", oper)
});

