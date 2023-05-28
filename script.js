//

let currNumber = '';
let first = '';
let op = '';
let currOperator = '';

// display
const display = document.getElementById('display');

// event listener for number buttons
const num = document.querySelectorAll('.number');

for (let i=0; i<num.length; i++) {
    num[i].addEventListener('click', () => {
        // don't allow user to insert multiple decimals
        if (currNumber.includes('.') && num[i].textContent == '.') {
            return
        }
        
        // give length a limit
        if (currNumber.length > 21) {
            return
        }
        // remove operator animation after user selects another number
        if (op != '') {
            currOperator.classList.remove('animation');
        }     

        currNumber += num[i].textContent;
        display.textContent = currNumber;
    })
}

// event listener for operators
const operators = document.querySelectorAll('.operator');

for (let i=0; i<operators.length; i++) {
    operators[i].addEventListener('click', () => {
        // dont allow user to select operator without selecting number first
        if (first == '' && currNumber == '') {
            return
        }

        // user cannot select multiple operators
        if (currNumber == '' && op != '') {
            return
        }

        // perform calculation if user selects another operator
        if (op != '') {
            operate();
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
    })
}

// equals event listener

const equals = document.querySelector('.equals');
equals.addEventListener('click', operate);

function operate() {
    // handle error if user selects equal before entering 2nd number
    if (currNumber == '') {
        return
    }

    // calculations
    if (op == '+') {
        first = parseFloat(first) + parseFloat(currNumber);
    }
    else if (op == '-') {
        first = parseFloat(first) - parseFloat(currNumber);
    }
    else if (op == 'x') {
        first = parseFloat(first) * parseFloat(currNumber);
    }
    else if (op == '/') {
        if (currNumber == 0) {
            display.textContent = "lol no";
            return
        }
        else {
            first = parseFloat(first) / parseFloat(currNumber);
        }     
    }
    // handle error if user selects equal before operator is selected
    else if (op == '') {
        return
    }
    // clear currNumber
    currNumber = '';
    // remove operator animation
    currOperator.classList.remove('animation');
    display.textContent = first;
    op = '';
}

// clear button event listener
const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
    if (op != '') {
        currOperator.classList.remove('animation');
    }   
    currNumber = '';
    first = '';
    op = '';
    currOperator = '';
    display.textContent = 0;
})

// delete button event listener
const del = document.getElementById('delete');

del.addEventListener('click', () => {
    if (currNumber != '') {
        // remove last character of string
        currNumber = currNumber.slice(0, -1);
        if (currNumber == '') {
            display.textContent = 0;
        }
        else {
            display.textContent = currNumber;
        }
    }
});