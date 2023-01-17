const digits = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
const smallDisplay=document.querySelector('.smalldisplay');
const equelsButton=document.querySelector('.equels');
const acButton = document.querySelector('.ac');

let firstOperand;
let nextOperand;
let firstValue;
let nextValue;
let sum;


digits.forEach((digit)=>{
    digit.addEventListener('click',()=>{
        setDisplay (display,digit);
        if (isOperator(digit.textContent)){
            if (firstValue==undefined){
                firstOperand=digit.textContent;
                firstValue=display.textContent;
                smallDisplay.textContent=display.textContent + ' ' + digit.textContent;
                display.textContent=0;
            }
            else {
                sum=operate(firstOperand,firstValue,Number(display.textContent));
                display.textContent=0;
                smallDisplay.textContent=sum + ' ' + digit.textContent;
                firstOperand=digit.textContent;
                firstValue=sum;
            }
        }
        
    })
})


function onEquel (operand,value){
    if (operand==='=') {
        display.textContent=value;
        smallDisplay=0;
    }
}

function setDisplay (display,digit) {
    if (display.textContent==0){
        display.textContent=digit.textContent;
    }else {
        if(isOperator(digit.textContent)) return;
        display.textContent+=digit.textContent;
    }
}


// RESET
acButton.addEventListener('click',()=>{
    reset ();
})

function reset () {
    display.textContent=0;
    smallDisplay.textContent='0';
    prevValue=undefined;
}



function isOperator (item){
    if (item =='-' || item =='+' || item =='/'
    || item =='*'){
        return true;
    }
    return false;
}

function operate (operator,num1,num2) {
    switch (operator) {
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
        case '*':
            return multiply(num1,num2);
            break;
        case '/':
            return divide(num1,num2);
            break;
        default:
            console.log("something went wrong !! try again.");
            break;
    }
}

function add (num1,num2) {
    return +num1+num2;
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