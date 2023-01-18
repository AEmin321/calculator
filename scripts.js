const digits = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const smallDisplay=document.querySelector('.smalldisplay');
const equelsButton=document.querySelector('.equels');
const acButton = document.querySelector('.ac');
const operands = document.querySelectorAll('.op');

let toggle=false;
let firstOperand;
let nextOperand;
let firstValue;
let nextValue;
let sum;



digits.forEach((digit)=>{
    digit.addEventListener('click',()=>{
        setDisplay (display,digit);
            // if (isOperator(digit.textContent)){
            //     if (firstValue==undefined){
            //         firstOperand=digit.textContent;
            //         firstValue=display.textContent;
            //         smallDisplay.textContent=display.textContent + ' ' + digit.textContent;
            //         display.textContent=0;
            //     }
            //     else {
            //         sum=operate(firstOperand,firstValue,display.textContent);
            //         display.textContent=0;
            //         smallDisplay.textContent=sum + ' ' + digit.textContent;
            //         firstOperand=digit.textContent;
            //         firstValue=sum;
            //     }
            // }
            
        })
    })

handleOperators ();
function handleOperators () {
    operands.forEach((operand)=>{
        operand.addEventListener('click',()=>{
            if (firstValue==undefined) {
                smallDisplay.textContent=display.textContent;
                firstValue=display.textContent;
                display.textContent=0;
                firstOperand=operand.textContent;
            }else {
                sum=operate(firstOperand,firstValue,display.textContent);
                display.textContent=0;
                smallDisplay.textContent=sum;
                firstValue=sum;
                firstOperand=operand.textContent;
            }
        })
    })
}




equelsButton.addEventListener('click',()=>{
    nextValue=(display.textContent).toString().slice(0,-1);
    console.log (nextValue);
    display.textContent=operate(firstOperand,firstValue,nextValue);
    smallDisplay.textContent=0;
    firstValue=nextValue;
})


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
    num1=Number(num1);
    num2=Number(num2);

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