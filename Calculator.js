let firstnumber,secondnumber,result,operand,f=0;
let current = document.querySelector('#screen');


function add(a,b){
    console.log(parseFloat(a)+parseFloat(b));
    return parseFloat(a)+parseFloat(b);
}

function sub(a,b){
    console.log(parseFloat(a)-parseFloat(b));
    return parseFloat(a)-parseFloat(b);
}

function mul(a,b){
    console.log(parseFloat(a)*parseFloat(b));
    return parseFloat(a)*parseFloat(b);
}

function div(a,b){
    console.log(parseFloat(a)/parseFloat(b));
    return parseFloat(a)/parseFloat(b);
}

/*function power(a,b){
    console.log(Math.power(a,b));
    return Math.power(a,b);
}*/

function displayresult(x){
    current.textContent=x;
}
function display(x){
    if((x==="+" || x==="-" || x==='*' || x==='/' || x==='^')){
        //console.log("inside operand");
        operand=x;
        current.textContent+=x;
        //console.log(x);
        f=1;
    }
    else if(f===1 && x!=='='){
        //console.log("inside second");
        current.textContent+=x;
        secondnumber=current.textContent;
        //console.log(secondnumber);
    }
    else if(f===0 && x!=='='){
        //console.log("inside first");
        current.textContent+=x;
        firstnumber=current.textContent;
        //console.log(firstnumber);
    }
    else if(x==='='){
        //console.log("inside =");
        //operate(firstnumber,secondnumber,operand);
        displayresult(operate(firstnumber,secondnumber,operand));
    }
}

function operate(a,b,operator){
    switch(operator){
        case '+' : return add(a,b); 
        case '-' : return sub(a,b); 
        case '*' : return mul(a,b); 
        case '/' : return div(a,b); 
        case '^' : return power(a,b); 
        default: console.log("Wrong operand");

    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
      display(button.id);
  });
});

function main(){

    /*let i=4;
    while(i>0){
    let num1=prompt("Enter the first number:");
    let num2=prompt("Enter the second number:");
    let operator=prompt("Enter the operand:");
    let result=operate(num1,num2,operator);
    //alert(result);
    i--;
    }*/
}