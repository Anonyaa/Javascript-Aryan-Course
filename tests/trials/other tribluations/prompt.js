let prompt = require('prompt-sync')();

let userInput = prompt("input some text: ");

console.log("the input text was" + userInput); 

const answer = prompt("Do you like JS?(y/n)");

if (answer == "y" || answer == "Y") {
    console.log ("Nice!!"); 
} else if (answer == "n" || answer == "N") {
    console.log ("awww"); 
} else if (answer == " ") {
    console.log ("say something")
} else {
    console.log ("what does that mean?")
}


switch (answer) {
    case "y":
    case "Y":
        console.log ("niiiice.");
        break;
    case "n":
    case "N": 
        console.log ("Awwww");
        break;
    default:
        console.log ("what does that mean?");
        break;
}


let reply = prompt("Are we there yet?");

while (reply != "yes") {
    reply = prompt("are we there yet??");
}