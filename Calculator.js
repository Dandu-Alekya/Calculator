function add(a,b){
    console.log(a+b);
    return a+b;
}

function sub(a,b){
    console.log(a-b);
    return a-b;
}

function mul(a,b){
    console.log(a*b);
    return a*b;
}

function div(a,b){
    console.log(a/b);
    return a/b;
}

function power(a,b){
    console.log(Math.power(a,b));
    return Math.power(a,b);
}

function display(x){
    console.log(x);
}

function operate(a,b,operator){
    switch(operator){
        case '+' : add(a,b); break;
        case '-' : sub(a,b); break;
        case '*' : mul(a,b); break;
        case '/' : div(a,b); break;
        case '^' : power(a,b); break;
        default: console.log("Wrong operand");

    }
}

function main(){
    let i=6;
    while(i>0){
    let num1=window.prompt("Enter the first number:");
    let num2=window.prompt("Enter the second number:");
    let operator=window.prompt("Enter the operand:");
    operate(num1,num2,operator);
    i--;
    }
}