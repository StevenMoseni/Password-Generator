// Assignment Code
var generateBtn = document.querySelector("#generate");
// console.log(generateBtn);

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
// var finalArray = [];

// console.log(finalPassword);

var passwordLength= prompt("Choose Password length between 8-128.");
var lowerCaseChoice = confirm("Do you want lower case?");
var upperCaseChoice = confirm("Do you want upper case?");
var numberChoie = confirm("would you like to include numbers?");
var SpechCharChoice =confirm ("Would you like to include special characters?");


console.log(passwordLength);


if (lowerCaseChoice) {
  for(var i = 0; i < lowerCaseArr.length; i++) {
  logicArr.push(lowerCaseArr[i]) 
  } 
}

if (upperCaseChoice) { 
  for(var i = 0; i < upperCaseArr.length; i++) { 
  logicArr.push(upperCaseArr[i])
  }
} 

if (numberChoie) { 
  for(var i = 0; i < numberArr.length; i++) { 
  logicArr.push(numberArr[i])  
  }
}

if (SpechCharChoice) { 
  for(var i = 0; i < specialCharArray.length; i++) { 
  logicArr.push(specialCharArray[i]) 
  }
}

// console.log(finalArray)

 for(var i = 0; i<password.length; i++){
  var randomNumber = Math.floor(Math.random()*finalArray.length);
  finalPassword += finalArray[randomNumber]

}

  return finalPassword
  console.log(finalPassword);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword)