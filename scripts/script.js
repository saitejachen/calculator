function add(n1,n2){
    return n1+n2;
}

sub = (n1,n2) => { return n1-n2;}
mul = (n1,n2) => { return n1*n2;}
div = (n1,n2) => { return n1/n2;}

function operate (op,n1,n2){
    switch(op){
        
        case '+': return add(n1,n2);
        case '-': return sub(n1,n2);
        case '*': return mul(n1,n2);
        case '/': return div(n1,n2);

    }
    
}
function clearVar(){
    n1='';
    n2='';
    opr='';
    inputDisplay.innerText='';
    resultField.innerText = 'Result : '
}
var n1='';
var n2='';
var opr='';

const digitContainer = document.getElementById('digits');

for (i=0;i<=9;i++){
    const tempDigit = document.createElement("BUTTON");
    tempDigit.className= 'digits';
    tempDigit.id = i;
    tempDigit.innerHTML = i;
    digitContainer.appendChild(tempDigit);
}

const inputDisplay = document.getElementById('input-display');
inputDisplay.innerText = '';
const resultField = document.getElementById('result');
const digitButtons = document.querySelectorAll('.digits');

digitButtons.forEach(digit => digit.addEventListener('click',function(){
    inputDisplay.innerText += digit.id;
    temp += digit.id;
}))

const opButtons = document.querySelectorAll('.op');
let temp = '';
opButtons.forEach(op => op.addEventListener('click', function(){
    n1=parseFloat(inputDisplay.innerText,10);
    opr = op.id;
    inputDisplay.innerText+=opr;
    temp='';
}))
console.log(n1);
console.log(n2);
console.log(opr);
const equals = document.getElementById('=');
equals.addEventListener('click', function(){
    inputDisplay.innerText+=n2;
    n2 = parseFloat(temp,10);
    console.log('n1 : '+n1);
    console.log('n2 : '+n2);
    console.log('opr : '+opr);
    result = operate(opr,n1,n2);
    resultField.innerText = 'Result : '+result;
})

const clear = document.getElementById('clear');
clear.addEventListener('click',function(){
    clearVar();
});