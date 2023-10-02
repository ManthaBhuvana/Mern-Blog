//function declaration
function sum1(a,b){
    return a+b;
}

//function  expression
let sum2=function(a,b){
    return a+b;
}




//arrow function
//body of function shd have only one statement
let sum3=(a,b)=> a+b;


console.log(sum3(10,20))


//compare numbers
function compare1(a,b){
    if(a>b){
        return "a is big"
    }
    else if(a==b){
        return "both are equal"
    }
    else{
        return "b is big"
    }
}

//function expression
let compare2=function (a,b){
    if(a>b){
        return "a is big"
    }
    else if(a==b){
        return "both are equal"
    }
    else{
        return "b is big"
    }
}


//arrow function
let compare3=(a,b)=>{
    if(a>b){
        return "a is big"
    }
    else if(a==b){
        return "both are equal"
    }
    else{
        return "b is big"
    }
}




console.log(compare1(123,234))
console.log(compare2(1123,234))