function calculateCost() {
    var error = document.getElementById("error").innerText = " ";
    var sign = document.getElementById("inputSign").value;
    var shipping = document.getElementById("shipping");



    if (sign.length >= 15 && sign.length < 30) {
        shipping.innerHTML = sign.length * (2.99 * 3);
    }
    else if (sign.length >= 30){
        var error = document.getElementById("error").innerText = "Moron, you can't have a sign with 30 characters!";
    } else {
        shipping.innerHTML = sign.length * 2.99;
    }

    var subtotal = document.getElementById("subtotal").innerHTML = sign.length * 1.99;
    var signTotal = Math.round(subtotal + document.getElementById("shipping").value);
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