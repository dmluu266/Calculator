//

let currNumber = '';
let first = '';
let second = '';
let op = '';

// display
const display = document.getElementById('display');

// event listener for number buttons
const num = document.querySelectorAll('.number');

for (let i=0; i<num.length; i++) {
    num[i].addEventListener('click', () => {
        currNumber += num[i].textContent;
        display.textContent = currNumber;
        console.log(num[i].textContent);
        console.log(currNumber)
    })
}

// event listener for operators
const operators = document.querySelectorAll('.operator');
let currOperator = '';
for (let i=0; i<operators.length; i++) {
    operators[i].addEventListener('click', () => {
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
equals.addEventListener('click', () => {
    // + calculation
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
})
