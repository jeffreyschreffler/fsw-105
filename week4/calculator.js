// A function that adds two numbers and returns the result
// A function that multiplies two numbers and returns the result
// A function that divides two numbers and returns the result
// A function that subtracts two numbers and returns the result
var readlineSync = require('readline-sync');

// Varibles

let usrNum1 = readlineSync.questionInt("Please enter your first number : ");
let usrNum2 = readlineSync.questionInt("Please enter your second number :");
let usrOperation = readlineSync.question("Please enter the operation to perform: add, sub, mul, div : ");
// sends users operation choice to lower case

let usrOperationLower = usrOperation.toLowerCase();
// additon function

function addFunc(num1, num2) {
    let addValue = num1 + num2;
    return(addValue);
};

// subtract function 

function subFunc(num1, num2) {
    let subValue = num1 - num2;
    return(subValue);
};

//multiply function

function multFunc(num1, num2) {
    let multValue = num1 * num2;
    return(multValue);
};

//divison function

function divFunc(num1, num2) {
    let divValue = num1 / num2;
    return(divValue);
};

//operation statements

if( usrOperationLower === "add") {
    console.log(`The result is: ${addFunc(usrNum1, usrNum2)} `);
        
};

if(usrOperationLower === "sub") {
    console.log(`The result is: ${subFunc(usrNum1, usrNum2)}`);
};

if(usrOperationLower === "mul") {
    console.log(`The result is: ${multFunc(usrNum1, usrNum2)}`);
};

if(usrOperationLower === "div") {
    console.log(`The result is: ${divFunc(usrNum1, usrNum2)}`);
};

