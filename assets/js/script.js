// Assignment code here

// shuffle any give string
var randomShuffle = function (string) {
  // declare variables
  var randomIndex, currentIndex, array;
  // convert string into array
  array = string.split('');
  // loop through the array
  for (var i = 0; i < array.length; i++) {
    // create a random number for index position
    randomIndex = Math.floor(Math.random() * array.length);
    // swap 
    currentIndex = array[i]
    array[i] = array[randomIndex]
    array[randomIndex] = currentIndex;
  }

  // turn the array back into a string
  string = array.join('')
  return string;
}

// generate password
var generatePassword = function () {
  // create variables that contain our strings of criteria
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  var numbers = '0123456789'
  var symbols = '~!@#$%^&*_+-?'
  // input should be validated 
  var valid = false;
  while (!valid) {
    // present the user with a series of prompts for password criteria
    // a. select which criteria to include in the password
    // b.choose a length of at least 8 characters and no more than 128 characters
    // c.confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    var passwordLength = parseInt(window.prompt("What is your desired password length?"))
    var includeLowerCase = window.confirm("Click OK if you would like lowercase letters in your password")
    var includeUpperCase = window.confirm("Click OK if you would like uppercase letters in your password")
    var includeNumbers = window.confirm("Click OK if you would like numbers in your password")
    var includeSymbols = window.confirm("Click OK if you would like special characters in your password")

    //validate the length of the password
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Your password must be between 8 and 128 characters in length.")
    }
    // validate at least one character type should be selected
    else if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSymbols) {
      window.alert("You must select at least one criteria.")
    }
    // if all validation is correct then continue to next step
    else {
      valid = true
    }
  }

  // filter out any false confirmations
  var password = '';
  if (includeLowerCase) {
    password += lowerCase
  }

  if (includeUpperCase) {
    password += upperCase
  }

  if (includeNumbers) {
    password += numbers
  }

  if (includeSymbols) {
    password += symbols
  }

  // shuffle the string using the randomShuffle function
  password = randomShuffle(password)

  // password is generated that matches the selected criteria
  var randomNum;
  var generatedPassword = ''
  var index = 0
  // loop through password length
  while (index < passwordLength) {
    // generate a random number
    randomNum = Math.floor(Math.random() * password.length);
    // add each random character selected to generatedPassword
    generatedPassword += password[randomNum]
    index++
  }

  //the password is returned and displayed to the page
  return generatedPassword;
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