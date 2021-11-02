let firstnumber='',secondnumber='',result='',operator='',f=0;
let current = document.querySelector('#screen');
current.textContent=" ";
const screen = document.querySelector('.display');
const numbuttons = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
let equals = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let del = document.querySelector('.delete');
let pi = document.querySelector('.pi');
let decimal = document.querySelector('.decimal');
numbuttons.forEach((num)=>{
    num.addEventListener('click', ()=>{
        setnum(num.id);
    });
});

operators.forEach((op)=>{
    op.addEventListener('click', ()=>{
        setoperator(op.id);
    });
});

equals.addEventListener('click',()=>{
    console.log(firstnumber);
    console.log(secondnumber);
    console.log(operator);
    displayresult(operate(firstnumber,secondnumber,operator));
});

clear.addEventListener('click',()=>{
    cleardisplay();
});

del.addEventListener('click',()=>{
    deletenum();

});

pi.addEventListener('click',()=>{
    setnum(pi.id);
});

decimal.addEventListener('click',()=>{
    setnum(decimal.id);
});

function setnum(number){
    //console.log(f);
    current.textContent+=number;
    if(number==='.'){
        decimal.disabled=true;
    }
    if(f===0){
        firstnumber+=number;
    }
    else{
        secondnumber+=number;
    }
}

function setoperator(x){
    operator=x;
    current.textContent+=x;
    decimal.disabled=false;
    f=1;
}

let ans = document.createElement("p");
ans.setAttribute('id','result')

function displayresult(x){
    ans.textContent=x;
    screen.append(ans);
    f=0;
}

function cleardisplay(){
    firstnumber="";
    operator="";
    secondnumber="";
    current.textContent="";
    decimal.disabled=false;
    ans.remove();
}

function deletenum(){
    //console.log("inside del");
    if(f===0){
        firstnumber=firstnumber.slice(0,-1);
        current.textContent= current.textContent.slice(0,-1);
    }
    else if(f===1){
        secondnumber = secondnumber.slice(0,-1);
        current.textContent= current.textContent.slice(0,-1);
    }
}
function operate(a,b,operator){
    switch(operator){
        case '+' : return add(a,b); 
        case '-' : return sub(a,b); 
        case 'x' : return mul(a,b); 
        case '÷' : if(b===0) return null;
                    else return div(a,b); 
        case '^' : return power(a,b); 
        default: return null //console.log("Wrong operator");

    }
}

function add(a,b){
    return parseFloat(a)+parseFloat(b);
}

function sub(a,b){
    return parseFloat(a)-parseFloat(b);
}

function mul(a,b){
    return parseFloat(a)*parseFloat(b);
}

function div(a,b){
    return parseFloat(a)/parseFloat(b);
}

function power(a,b){
    return Math.pow(parseFloat(a),parseFloat(b));
}