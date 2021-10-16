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
    return(num1 + num2);
};

// subtract function 

function subFunc(num1, num2) {
    return(num1 - num2);
 
};

//multiply function

function multFunc(num1, num2) {
    return(num1 * num2)
};

//divison function

function divFunc(num1, num2) {
    return(num1 / num2)
};

// calculator function

function mycalc(num1, num2, operation) {
    if (operation === "add") {
        console.log("The result is: " + addFunc(num1, num2));
    }  else if (operation === "sub") {
        console.log("The result is: " + subFunc(num1, num2))
    } else if (operation === "mul") {
        console.log("The result is: " + multFunc(num1, num2))
    } else if (operation === "div") {
        console.log("The result is: " + divFunc(num1, num2))
    }
}

mycalc(usrNum1, usrNum2, usrOperationLower);