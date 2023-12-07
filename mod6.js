//New dog object myDogConst
var myDogConst = new Dog("Scooby-Doo", "Great Dane", "Scooby-Doo Where Are You", "I'm not intimidating because I'm always scared!");
myDogConst.canTalk = true;

//Constructor function
function Dog(name, breed, show, sound){
  this.name = name;
  this.breed = breed;
  this.show = show;

  //Additional properties
  this.mySound = sound;
  this.canTalk = true;
  this.myGreeting = function(){
    var talkStatus = this.canTalk ? " I can talk!" : " I cannot talk";
    return "Hello, my name is " + this.name + ", when I bark " + this.mySound + talkStatus + " I starred in the tv show " + this.show + ". In the cartoon, my character was a " + this.breed + ".<br><br>";
  };
}

//Display greeting message
document.write(myDogConst.myGreeting());

//New dog objects
var dog1 = new Dog("Atticus", "Welsh Corgi", "Infinity Train", "I sound mighty, like a king!");
var dog2 = new Dog("Scrappy-Doo", "Great Dane", "Scrappy-Doo", "my voice is deep despite my small size.");

//For..in loop
for (var property in dog1) {
console.log(property + ": " + dog1[property]);
}

//User input
var userInput = prompt("Please enter the name of a dog: Atticus or Scrappy-Doo.");

if (userInput === dog1.name) {
document.write(dog1.myGreeting());
} else if (userInput === dog2.name) {
document.write(dog2.myGreeting());
} else {
document.write("The dog you selected does not exist.");
}
