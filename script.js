// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

function generatePassword() {
  var finalPassword = "";

  var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
  console.log(lowerCaseArr);

  var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  console.log(upperCaseArr);

  var numberArr = "0123456789".split("");
  console.log(numberArr);

  var specialCharArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
  console.log(specialCharArray);

  var logicArr = [];

  var passwordLength = prompt("Choose Password length between 8-128.");
  var lowerCaseChoice = confirm("Do you want lower case?");
  var upperCaseChoice = confirm("Do you want upper case?");
  var numberChoice = confirm("would you like to include numbers?");
  var SpechCharChoice = confirm("Would you like to include special characters?");

  console.log(passwordLength);

  if (lowerCaseChoice) {
    for (var i = 0; i < lowerCaseArr.length; i++) {
      logicArr.push(lowerCaseArr[i])
    }
  }
  console.log("logicArr", logicArr);
  if (upperCaseChoice) {
    for (var j = 0; j < upperCaseArr.length; j++) {
      logicArr.push(upperCaseArr[j])
    }
  }
  console.log("logicArr", logicArr);
  if (numberChoice) {
    for (var h = 0; h < numberArr.length; h++) {
      logicArr.push(numberArr[h])
    }
  }
  console.log("logicArr", logicArr);
  if (SpechCharChoice) {
    for (var n = 0; n < specialCharArray.length; n++) {
      logicArr.push(specialCharArray[n])
    }
  }
  console.log("logicArr", logicArr);
  
  for (var i = 0; i < passwordLength; i++) {
    console.log("interation: ", i);
    var randomNumber = Math.floor(Math.random() * logicArr.length);
    console.log("random number: ", randomNumber);
    finalPassword += logicArr[randomNumber]

  }
  console.log(finalPassword);
  return finalPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword)