// Assignment Code
var generateBtn = document.querySelector("#generate");

// setup character groups
var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var number = ['1','2','3','4','5','6','7','8','9','0']

var specialChar = ['!','@','#','$','%','^','&','*',',','.','?']

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // pop up windows ask for constraint
  var pswLength = prompt("please enter the length of your password:")
  var ifUpper = confirm("do you want upper case letter in your password?")
  var ifLower = confirm("do you want lower case letter in you password?")
  var ifNumbers = confirm("do you want numbers in your password?")
  var ifSpecial = confirm("do you want special character in your password?")
  
  // generage a 'basket' of characters that user requires
  var validChars = []
  if(ifUpper) { validChars.concat(upperChar) }
  else if(ifLower) { validChars.concat(lowerChar) } 
  else if(ifNumbers) { validChars.concat(number) }
  else if(ifSpecial) { validChars.concat(specialChar) }

  // generate a password with required length
  var result = ""
  for (var i = 0; i < pswLength; i++) {
    var index = randomNum(validChars.length)
    result += validChars[index]
    return result
  }
}

// generate a random number between 0 and range
function randomNum(range) {
  var result = Math.floor(Math.random() * range)
  return result
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 