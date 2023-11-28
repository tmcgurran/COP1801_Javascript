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

document.write("The service amount you entered is $" + serviceAmount + ". ");
document.write("Based on that amount and a service quality of " + serviceQuality + ", the recommended tip is $" + tipAmount.toFixed(2) + ".");

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
