let firstnumber='',secondnumber='',result='',operator='',f=0;
let current = document.querySelector('#screen');
current.textContent=" ";
const screen = document.querySelector('.display');
const numbuttons = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
let equals = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let del = document.querySelector('.delete');

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
    f=0;
});

clear.addEventListener('click',()=>{
    cleardisplay();
});

del.addEventListener('click',()=>{
    console.log("del");
    deletenum();

});

function setnum(number){
    current.textContent+=number;
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
    //console.log(x);
    f=1;
}

let ans = document.createElement("p");
ans.setAttribute('id','result')

function displayresult(x){
    ans.textContent=x;
    screen.append(ans);
}

function cleardisplay(){
    firstnumber="";
    operator="";
    secondnumber="";
    current.textContent="";
    ans.remove();
}

function deletenum(){
    console.log("inside del");
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