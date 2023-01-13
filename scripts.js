const digit = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
let value=0;


digit.forEach((digit)=>{
    digit.addEventListener('click',()=>{
        if (display.textContent==0){
            display.textContent=digit.textContent;
        }
        else {
            display.textContent+=digit.textContent;
        }
    })
})

function operate (operator,num1,num2) {
    switch (operator) {
        case operator=='add':
            add(num1,num2);
            break;
        case operator=='subtract':
            subtract(num1,num2);
            break;
        case operator=='multiply':
            multiply(num1,num2);
            break;
        case operator=='divide':
            divide(num1,num2);
            break;
        default:
            console.log("something went wrong !! try again.");
            break;
    }
}

function add (num1,num2) {
    return num1+num2;
}

function subtract (num1,num2) {
    return num1-num2;
}

function multiply (num1,num2) {
    return num1*num2;
}

function divide (num1,num2) {
    return num1/num2;
}