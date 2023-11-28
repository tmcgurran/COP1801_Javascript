function calculateTip() {
var serviceAmount = parseFloat(prompt("Enter the dollar amount of the service:"));
var serviceQuality = prompt("Enter the service quality (Great, Ok, or Poor):");

if (!isValidServiceQuality(serviceQuality)) {
document.write("Invalid service quality entered. Ending the code.");
return;
}

if (!isValidServiceAmount(serviceAmount)) {
document.write("Invalid service amount entered. Ending the code.");
return;
}

var tipAmount = serviceAmount * getTipPercentage(serviceQuality);

document.write("Service amount: $" + serviceAmount +"<br>");
document.write("Recommended tip: $" + tipAmount.toFixed(2) + "<br>");
document.write("Service quality: " + serviceQuality);
}

function isValidServiceQuality(serviceQuality) {
return serviceQuality === "Great" || serviceQuality === "Ok" || serviceQuality === "Poor";
}

function isValidServiceAmount(serviceAmount) {
return serviceAmount >= 5.00 && serviceAmount <= 500.00;
}

function getTipPercentage(serviceQuality) {
if (serviceQuality === "Great") {
return 0.2;
} else if (serviceQuality === "Ok") {
return 0.15;
} else {
return 0.1;
}
}

calculateTip();
