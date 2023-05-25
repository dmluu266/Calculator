//

let currNumber = '';
let first = '';
let second = '';
let op = '';

// event listener for number buttons
const num = document.querySelectorAll('.number');

for (let i=0; i<num.length; i++) {
    num[i].addEventListener('click', () => {
        currNumber += num[i].textContent;
        console.log(num[i].textContent);
        console.log(currNumber)
    })
}

// event listener for operators
const operators = document.querySelectorAll('.operator');

for (let i=0; i<operators.length; i++) {
    operators[i].addEventListener('click', () => {
        op = operators[i].textContent;
        first = currNumber;
        // clear currNumber
        currNumber = '';

        console.log(op)
    })
}

// equals event listener

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    console.log(parseInt(first) + parseInt(currNumber));
})
