const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
const smallDisplay=document.querySelector('.smalldisplay');
const acButton = document.querySelector('.ac');

let firstOperator;
let secondOperator;
let firstValue;
let secondValue;
let sum;


window.addEventListener('keydown',(e)=>{
    if (e.key =='Backspace' ) {
        display.textContent=(display.textContent).slice(0,-1);

    }
    if (display.textContent==''){
        display.textContent=0;
    }
})


buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        setDisplay (display,btn);
    
        //handles the operators
        if (isOperator(btn.textContent)){
            if (firstOperator==undefined) {
                firstValue=display.textContent;
                firstOperator=btn.textContent;
                smallDisplay.textContent=display.textContent;
                display.textContent=0;
            }else if (firstOperator!=undefined && secondOperator==undefined) {
                secondOperator=btn.textContent;
                secondValue=display.textContent;
                sum=operate(firstOperator,firstValue,secondValue);
                firstValue=sum;
                smallDisplay.textContent=sum;
                display.textContent=0;
                sum=undefined;
            }else if (firstOperator!=undefined && secondOperator!=undefined) {
                secondValue=display.textContent;
                sum=operate(secondOperator,firstValue,secondValue);
                secondOperator=btn.textContent;
                firstValue=sum;
                display.textContent=0;
                smallDisplay.textContent=sum;
                sum=undefined;
            }
        }
        // handles if input is equels
        else if (btn.textContent == '='){
            if (firstOperator!= undefined && secondOperator==undefined) {
                secondValue=display.textContent;
                sum=operate(firstOperator,firstValue,secondValue);
                firstValue=sum;
                display.textContent=sum;
                smallDisplay.textContent=0;
                firstOperator=undefined;
                secondOperator=undefined;
                secondValue=undefined;
                sum=undefined;
            }
            else if (secondOperator != undefined && firstOperator!=undefined) {
                secondValue=display.textContent;
                sum=operate(secondOperator,firstValue,secondValue);
                display.textContent=sum;
                firstValue=sum;
                sum=undefined;
                smallDisplay.textContent=0;
                firstOperator=undefined;
                secondValue=undefined;
                secondOperator=undefined;
            }
        }
    })
})

//Rounding the number 3 dec
function roundResult (result) {
    return Math.round(result * 1000)/1000;
}

//displaying values entered
function setDisplay (display,digit) {
    if (display.textContent===0 || display.textContent==='0' && digit.textContent!='='){
        if (digit.textContent=='.') {
            display.textContent='0.';
            return ;
        }
        display.textContent=digit.textContent;
    }else {
        if ((display.textContent).length>14) return;
        if(isOperator(digit.textContent) || digit.textContent=='=') return;
        if (digit.textContent=='.') {
            if ((display.textContent).includes('.')) return;
        }
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
    firstValue=undefined;
    secondValue=undefined;
    firstOperator=undefined;
    secondOperator=undefined;
}


//to check if is operator
function isOperator (item){
    if (item =='-' || item =='+' || item =='/'
    || item =='*'){
        return true;
    }
    return false;
}

//operating function
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
            if (num2==0){
                return ':(';
            }
            return divide(num1,num2);
            break;
        default:
            console.log("something went wrong !! try again.");
            break;
    }
}

//simple math functions
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