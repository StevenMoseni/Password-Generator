// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

  function generatePassword(){
    var finalArray = [];
var finalPassword = "";
    
var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz" .split("");
console.log(lowerCaseArr);

var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
console.log(upperCaseArr);

var numberArr = "0123456789" .split("");
console.log(numberArr);

var specialCharArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" .split("");
console.log(specialCharArray);

var logicArr = [];
console.log(logicArr);

var passwordLength = prompt("Choose Password length between 8-128.");
var lowerCaseChoice = confirm("Do you want lower case?");
var upperCaseChoice = confirm("Do you want upper case?");
var numberChoie = confirm("would you like to include numbers?");
var SpechCharChoice =confirm ("Would you like to include special characters?");

// console.log(passwordLength);
var passwordLength = prompt  
  
}
if (lowerCaseChoice) {
  for(var i = 0; i < lowerCaseArr.length; i++) {
    logicArr.push(lowerCaseArr[i]) 
  } 


} else if (upperCaseChoice){ 
  for(var i = 0; i < upperCaseArr.length; i++){ 
    logicArr.push(upperCaseArr[i])
  }
  
} else if 

for(var i = 0; i<password.length; i++){
  var randomNumber = Math.floor(Math.random()*finalArray.length);
  finalPassword += finalArray[randomNumber]
}

  return finalPassword
}


  
var container = document.querySelector("containter");
console.log(container);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);
// var userChoice = 9;

// var logicArr = []
// for(var i = 0; i , userChoice; i++){
//   finalArr.push(logicArr[Math.floor(Math.random() * logicArr.length)]);

// }
// console.log(finalArr.join(""))

// Add event listener to generate button


// //just a message
// var passwordLength = prompt("Choose Password Length");

// // prompt("Choose a length for you password of at least 8 characters and no more than 128 characters");
// // //user can select OK or cancel
// var choice = confirm("Choose lowercase, uppercase, numeric, and/or special characters");
// //Stores user input in variable
// // var choice2 = prompt("Choose Password");
// console.log(choice2)
// var choices = ["R","P","S"];
// //creates a random number between 0-2
// var randomIndex = Math.floor(Math.random()*3)
