let prompt = require('prompt-sync')();
let value1 =  prompt("Give me your first number: ");
let value2 = prompt("And give me your second number: ");
let operation = prompt("And what operation do you need? ")

let x = parseInt(value1);

let y = parseInt(value2);

if (operation == "addition") {
    console.log(x,"+", y, "=")
    console.log(x + y)
} else if (operation == "subtraction") {
    console.log(x,"-", y, "=")
    console.log(x - y)
} else if (operation == "multiplication") {
    console.log(x,"*", y, "=")
    console.log(x * y)
} else if (operation == "division") {
    console.log(x,"/", y, "=")
    console.log(x / y)
} else {
    console.log("I don't know what that means. Please write either addition, subtraction, multiplication, or division.")
}