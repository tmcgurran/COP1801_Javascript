//1. ask user to enter their first name
var firstName = prompt("Please enter your first name.");

//2. create a constant piValue
const piValue = 3.1415296;

//3. ask user to enter favorite number
var myFavNum = prompt("Please enter your favorite number.");

//4. calculate area of circle
var myArea = piValue * Math.pow(myFavNum, 2);

//5. display message
document.write("Hello " + firstName + ", you entered " + myFavNum + " as your favorite number.\n");
document.write("If that was the radius of a circle, the area would be " + myArea + ".");
