// Assignment Code
// Goal: generate a random password

var generateBtn = document.querySelector("#generate");

// Below is the function block for generating the password.
function generatePassword(){
  
  // empty variable to represent the fianl password that will be generated later on.
  var finalPassword = "";

  // a string of options the computer will generate depnding on the user input.
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacter = "!@#$%&*+?";
  var numeric = "0123456789";
  
  // asking user their criteria for the generated passowrd.
  var charLength = prompt("Please choose a number between 8-128 for the length of your password");
  var lowerCaseChoice = confirm("Would you like to use a lower case?");
  var upperCaseChoice = confirm("Would you like to use a upper case?");
  var specialCharacterChoice = confirm("Would you like to use a special character?");
  var numeric = confirm("Would you like to use a numerical value?");

  // empty variable to represent a new set of charactes that will be generated by the computer.
  var characterSet = "";


  // user will enter the character length. if not within range of 8-128 characters, they will need to reenter the value.
  while (charLength < 8 && charLength > 128) {
    charLength = prompt("Length must be between 8-128. Please enter another value");
  }

  // if the user chooses okay for using lower case, a new character set is generated from the empty string of character set and the var lowerCase.
  if (lowerCaseChoice === true){
    characterSet += lowerCase;
  }

  // if the user chooses okay for using upper case, a new character set is generated from the empty string of character set and the var upperCase.
  if (upperCaseChoice === true){
    characterSet += upperCase;
  }

  // if the user chooses okay for using special character, a new character set is generated from the empty string of character set and the var specialCharacter.
  if (specialCharacterChoice === true){
    characterSet += specialCharacter;
  }

  // if the user chooses okay for using numeric, a new character set is generated from the empty string of character set and the var numeric.
  if (numeric === true){
    characterSet += numeric;
  }

  // a new variable for the new generated character set to be split into individual characters as they are in a long string.
  var charSetArr = characterSet.split('');

  // a for-loop using the charLength for the index to determine the length of ths passsword
  for (var i = 0; i < charLength; i++) {
    // the variable finalPassword will be from the random index of charSetArr.
    finalPassword += charSetArr[Math.floor(Math.random() * charSetArr.length)]

  }

  // return the final password value back to the box.
  return finalPassword;
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }
// click generate password button, then we will run the write password function
generateBtn.addEventListener("click", writePassword);

