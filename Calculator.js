let currentdisplay=' ';

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

function display(x){
    current.textContent=x;
    console.log(x);
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