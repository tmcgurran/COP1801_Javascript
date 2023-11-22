for (i = 0; i <= 10; i++){
  if (i % 2 === 0){
    document.write("Count " + i + " is even<br>");
  }
  else {
    document.write("Count " + i + " is odd<br>");
  }
}

let myNum;
do {
  myNum = parseInt(prompt("Enter a number between 5 and 20:"));
}
while (myNum < 5 || myNum > 20);

let counter = 1;
do {
  document.write("<br>Counter: ", counter);
  counter++;
}
while (counter <= myNum);


let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];
document.write("<br><br>Subjects:<br>");
subjects.forEach(myFunction);

function myFunction(value){
  document.write(value + "<br>");
}
document.write("<br><br>Subjects:\t" + subjects.toString());
