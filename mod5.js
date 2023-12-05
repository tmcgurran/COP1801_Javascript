//Object literal with properties
var myDog = {
  name: "Scooby-Doo",
  breed: "Great Dane",
  show: "Scooby-Doo Where Are You",

  //Additional property
  mySound: "I don't sound intimidating because I'm always scared",
};

//Display message
document.write("Hello, my name is " + myDog.name + ", when I bark " + myDog.mySound + ". ");
document.write("I starred in the tv show " + myDog.show + ". ");
document.write("My character was a " + myDog.breed + ". I was the animal companion in a cartoon about teenage humans who solve mysteries.<br><br>");

//New dog object myDogConst
var myDogConst = new Dog("Sccoby-Doo", "Great Dane", "Scooby-Doo Where Are You");
myDogConst.canTalk = true;

//Constructor function
function Dog(name, breed, show){
  this.name = name;
  this.breed = breed;
  this.show = show;

  //Additional propertues
  this.mySound = "I say Ruh-Roh!";
  this.canTalk = true;
  this.myGreeting = function(){
    return "Hello, my name is " + this.name + ", when I bark " + this.mySound + " I starred in the tv show " + this.show + ". My character was a " + this.breed + ". I was the animal companion in a cartoon about teenagers who solve mysteries.";
  };
}

//Display greeting message
document.write(myDogConst.myGreeting());
