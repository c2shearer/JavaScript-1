function calculateCost() {
    var sign = document.getElementById("inputSign").value;
    var shipping = document.getElementById("shipping");

    if (sign.length >= 15) {
        shipping.innerHTML = sign.length * (2.99 * 3);
    } else {
        shipping.innerHTML = sign.length * 2.99;
    }

    var subtotal = document.getElementById("subtotal").innerHTML = sign.length * 2.99;
    var signTotal = Math.round(subtotal + shipping.innerHTML);
    document.getElementById("usersign").innerHTML = sign;
    document.getElementById("tiles").innerHTML = sign.length;
    document.getElementById("total").innerHTML = signTotal;
}


/*invoice example
var sign = "Bristol Zoo!";
var length = sign.length;
var subtotal = length * 2.99;
var shipping = 4.99;
var total = Math.round(subtotal + shipping);

document.getElementById("usersign").innerHTML= sign;
document.getElementById("tiles").textContent = length;
document.getElementById("subtotal").textContent = `£${subtotal}`;
document.getElementById("shipping").textContent = `£${shipping}`;
document.getElementById("total").textContent = `£${total}`
*/