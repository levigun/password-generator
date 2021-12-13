// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Goal: generate a random password
  
  // 2. a prompt will appear.
  // 3. Prompt will ask length (8-128 char) of character.
  
  var charLength = prompt("Please choose a number between 8-128 for the length of your password");

  // 4. user will enter the length. if not number value, error and reenter the value.
  var charLengthIsNotANumber = typeof charLength !== 'number';
  var charLengthIsNotInRange = typeof charLength === 'number' && (charLength < 8 || charLength > 128);
  if ( charLengthIsNotANumber || charLengthIsNotInRange) {
    alert("Please re-enter passeword. Value is not a number or not within the range")
  } 
  // 5. confirm will come out asking lowercase 
  // 6. user will click okay or cancel (yes is okay cancel is no)
  
  
  // 7. confirm will come out asking uppercase 
  // 8. user will click okay or cancel (yes is okay cancel is no)
  
  // 9. confirm will come out asking special character
  // 10. user will click okay or cancel (yes is okay cancel is no)
  
  // confirm will come out asking for numeric
  // user will click okay or cancel (yes is okay cancel is no)
  
  // will generate password base on user criteria.
  
  // send the generated password to the webpage in the generate box.
  
}
// 1. click generate password button, then we will run the write password function
generateBtn.addEventListener("click", writePassword);

