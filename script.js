// Assignment Code
var generateBtn = document.querySelector("#generate");

  function generatePassword(){
    

for(var i = 0; i<password.length; i++){
  var randomNumber = Math.floor(Math.random()*finalArray.length);
  finalPassword += finalArray[randomNumber]
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
