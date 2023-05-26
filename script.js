//

let currNumber = '';
let first = '';
let second = '';
let op = '';
let currOperator = '';

// display
const display = document.getElementById('display');

// event listener for number buttons
const num = document.querySelectorAll('.number');

for (let i=0; i<num.length; i++) {
    num[i].addEventListener('click', () => {
        // remove operator animation after user selects another number
        if (op != '') {
            currOperator.classList.remove('animation');
        }
        

        currNumber += num[i].textContent;
        display.textContent = currNumber;
        console.log(num[i].textContent);
        console.log(currNumber)
    })
}

// event listener for operators
const operators = document.querySelectorAll('.operator');

for (let i=0; i<operators.length; i++) {
    operators[i].addEventListener('click', () => {
        // perform calculation if user selects another operator
        if (op != '') {
            equ();
        }
        
        currOperator = operators[i];
        op = currOperator.textContent;
        // add operator animation
        currOperator.classList.add('animation');
        // set first = currNumber only if first calculation
        if (first == '') {
            first = currNumber;
        }
        
        // clear currNumber
        currNumber = '';

        console.log(op)
    })
}

// equals event listener

const equals = document.querySelector('.equals');
equals.addEventListener('click', equ);

function equ() {
    // calculations
    if (op == '+') {
        first = parseInt(first) + parseInt(currNumber);
    }
    else if (op == '-') {
        first = parseInt(first) - parseInt(currNumber);
    }
    else if (op == 'x') {
        first = parseInt(first) * parseInt(currNumber);
    }
    else if (op == '/') {
        first = parseInt(first) / parseInt(currNumber);
    }
    // clear currNumber
    currNumber = '';
    // remove operator animation
    currOperator.classList.remove('animation');
    display.textContent = first;
    op = '';
}
