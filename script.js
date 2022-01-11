// Variable of 'Cameron'
let cameron = "Cameron";
let age = 19;

for (let i = 0; i < cameron.length; i++) {
    console.log(cameron[i]);
}

console.log(`My name is ${cameron} and I am ${age}`);

document.getElementById("msg").innerHTML = "Hello " + cameron;

var today = new Date();
var hour = today.getHours();
var greeting;

// Check if Time is 6 o'clock
/*if (hour > 18) {
    greeting = "Evening!";
} else if (hour > 12) {
    greeting = "Afternoon!";
} else if (hour > 5) {
    greeting = "Morning";
} else if (hour > 23 && hour < 5) {
    greeting ="Night"
}

document.write(`<h2>${greeting}</h2>`)

document.getElementById("time").innerHTML = "";*/

// Invoice
var sign = "Bristol Zoo";
var signLength = sign.length;
var subtotal = length * 2.99;
var shipping = 4.99;
var total = subtotal + shipping;

document.getElementById("usersign").innerHTML = sign;
document.getElementById("tiles").textContent = signLength;
document.getElementById("subtotal").textContent = `£${subtotal}`;
document.getElementById("shipping").textContent = `£${shipping}`;
document.getElementById("total").textContent = `£${total}`;

// Opens Alert 
// alert("Hello World!"); 

// Prompts allow to capture information from a user
// var username = prompt("Enter Username:");
// alert(`Welcome to the Club, ${username}!`);

// Calculator with prompts and alerts

/*alert("Calculator");
var x;
while (x != "q") {
    x = prompt("Add, Subtract, Multiply or Divide");
    x.toLowerCase();
    var num1, num2;
    if (x == "add") {
        num1 = prompt("First Number");
        num2 = prompt("Second Number");
        alert(`Answer: ${num1+num2}`);
    }
    else if (x == "subtract"){
        num1 = prompt("First Number");
        num2 = prompt("Second Number");
        alert(`Answer: ${num1-num2}`);
    }
    else if (x == "multiply") {
        num1 = prompt("First Number");
        num2 = prompt("Second Number");
        alert(`Answer: ${num1*num2}`);
    }
    else if (x == "divide") {
        num1 = prompt("First Number");
        num2 = prompt("Second Number");
        alert(`Answer: ${num1/num2}`);
    } 
    else if (x == "q") {
        alert("OKAY");
    }
    else {
        alert("Not Known!");
    }
}*/