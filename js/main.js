debugger
let a=Number(prompt("a..."))
let b=Number(prompt("b..."))
let operand=prompt("+ - * /")
switch(operand){
    case"+":{
        console.log(a+b);
        break;
    }
    case"-":{
        console.log(a-b);
        break;
    }
    case"*":{
        console.log(a*b);
        break;
    }
    case"/":{
        console.log(a/b);
        break;
    }
    default:{
        console.log("دنبال چه میگردی اون رفته از این شهر");
        break;
    }
}