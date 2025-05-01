let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function chooseOperator(op) {
    if (currentInput === '' && previousInput !== '') {
        operator = op;
        updateDisplay(previousInput + ' ' + operator);
        return;
    }

    if (previousInput !== '') {
        compute();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay(previousInput + ' ' + operator);
}

function compute() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }

    currentInput = computation;
    operator = '';
    previousInput = '';
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    document.getElementById('result').value = value;
}

function clearCalculator() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay('');
}
