const digits = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
const smallDisplay=document.querySelector('.sm-dis');
const equelsButton=document.querySelector('.equels');

let prevValue;
let nextValue;
let sum;


digits.forEach((digit)=>{
    digit.addEventListener('click',()=>{
        if (display.textContent==0){
            display.textContent=digit.textContent;
        }else {
            if (isOperator(digit.textContent)){
                if (prevValue!=undefined){
                    prevValue=operate(digit.textContent,prevValue,Number(display.textContent));
                    console.log(prevValue);
                }else {
                    prevValue=display.textContent;
                }
                smallDisplay.textContent=prevValue;
                display.textContent=0;
            }else {
                display.textContent+=digit.textContent;
            }
        }
    })
})


// equelsButton,addEventListener('click',()=>{
//     display.textContent=prevValue;
//     smallDisplay.textContent='';
// })



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