let firstnumber='',secondnumber='',result='',operator,f=0;
let current = document.querySelector('#screen');
current.textContent=" ";
const screen = document.querySelector('.display');
const numbuttons = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
let equals = document.querySelector('.equal');
numbuttons.forEach((num)=>{
    num.addEventListener('click', ()=>{
        //console.log("hiii");
        displaynum(num.id);
    });
});

operators.forEach((op)=>{
    op.addEventListener('click', ()=>{
        //console.log("hi");
        displayoperator(op.id);
    });
});

equals.addEventListener('click',()=>{
    console.log(firstnumber);
    console.log(secondnumber);
    console.log(operator);
    displayresult(operate(firstnumber,secondnumber,operator));
    f=0;
});

function displaynum(number){
    //console.log("hi num");
    current.textContent+=number;
    if(f===0){
        firstnumber+=number;
    }
    else{
        secondnumber+=number;
    }
}

function displayoperator(x){
        operator=x;
        current.textContent+=x;
        console.log(x);
        f=1;
}

/*buttons.forEach((button) => {
  button.addEventListener('click', () => {
      display(button.id);
  });
});*/

let ans = document.createElement("p");
ans.setAttribute('id','result')
function displayresult(x){
    ans.textContent=x;
    screen.append(ans);
    //firstnumber=x;
    //console.log(firstnumber);
}
/*
function display(x){
    if((x==="+" || x==="-" || x==='x' || x==='÷' || x==='^')){
        console.log("inside operand");
        operand=x;
        current.textContent+=x;
        console.log(x);
        f=1;
    }
    else if(f===1 && x!=='='){
        console.log("inside second");
        current.textContent+=x;
        secondnumber=current.textContent;
        if(secondnumber===0){
            displayresult("Cannot Divide by zero!");
        }
        console.log(secondnumber);
    }
    else if(f===0 && x!=='='){
        console.log("inside first");
        current.textContent+=x;
        firstnumber=current.textContent;
        console.log(firstnumber);
    }
    else if(x==='='){
        //console.log("inside =");
        //operate(firstnumber,secondnumber,operand);
        console.log(parseFloat(firstnumber));
        console.log(parseFloat(secondnumber));
        displayresult(operate(firstnumber,secondnumber,operand));
    }
    else if(x=="AC"){
        cleardisplay();
    }
}
*/

function cleardisplay(){
    firstnumber="";
    operand="";
    secondnumber="";
    current.textContent="";
    ans.remove();
}

function operate(a,b,operator){
    switch(operator){
        case '+' : return add(a,b); 
        case '-' : return sub(a,b); 
        case 'x' : return mul(a,b); 
        case '÷' : if(b===0) return null;
                    else return div(a,b); 
        case '^' : return power(a,b); 
        default: console.log("Wrong operator");

    }
}

function add(a,b){
    //console.log(parseFloat(a)+parseFloat(b));
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