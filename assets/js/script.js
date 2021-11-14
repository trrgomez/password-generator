// Assignment code here
var generatePassword = function(){
  console.log("clicked")
  // input should be validated and at least one character type should be selected
      // present the user with a series of prompts for password criteria
      // a. select which criteria to include in the password
      // b.choose a length of at least 8 characters and no more than 128 characters
      // c.confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
      var passwordLength = parseInt(windom.prompt("What is your desired password length?"))
      var includeLowerCase = window.confirm("Click OK if you would like lowercase letters in your password")
      var includeUpperCase = window.confirm("Click OK if you would like uppercase letters in your password")
      var includeNumbers = window.confirm("Click OK if you would like numbers in your password")
      var includeSymbols = window.confirm("Click OK if you would like special characters in your password")

  // password is generated that matches the selected criteria
    // a. the password is either displayed in an alert or written to the page
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
