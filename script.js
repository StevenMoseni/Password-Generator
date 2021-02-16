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

var lowerCaseArr = "0123456789" .split ("")
var lowerCaseChoice = confirm("Do you want lower case?");
if (lowerCaseChoice) {
}else{
}

var container = document.querySelector("containter");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


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
