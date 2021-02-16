// Assignment Code
var generateBtn = document.querySelector("#generate");

  function generatePassword(){
    var finalArray = ["A", 7, "&"]
var finalPassword = "";
    

for(var i = 0; i<password.length; i++){
  var randomNumber = Math.floor(Math.random()*finalArray.length);
  finalPassword += finalArray[randomNumber]
}

  return finalPassword
}

var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz" .split("");
var UpperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var numberArr = "0123456789" .split ("")
var logicArr = [];
var lowerCaseChoice = confirm("Do you want lower case?");
var upperCaseChoice = confirm("Do you want upper case?");
if (lowerCaseChoice) {
  for(var i = 0; i < lowerCaseArr.length; i++) {
    logicArr.push(lowerCaseArr[i]) 
  } 
  logicArr.push(lowerCaseArr)

} else if (upperCaseChoice){ 
}

var container = document.querySelector("containter");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var userChoice = 9;

var logicArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!"]

for(var i = 0; i , userChoice; i++){
  finalArr.push(logicArr[Math.floor(Math.random() * logicArr.length)]);

}
console.log(finalArr.join(""))

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//just a message
prompt("Choose a length for you password of at least 8 characters and no more than 128 characters");
//user can select OK or cancel
var choice = confirm("Choose lowercase, uppercase, numeric, and/or special characters");
//Stores user input in variable
var choice2 = prompt("Choose Password");
console.log(choice2)
var choices = ["R","P","S"];
//creates a random number between 0-2
var randomIndex = Math.floor(Math.random()*3)
