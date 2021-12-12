// Assignment Code
var generateBtn = document.querySelector("#generate");

const UpperCaseAlphabets =["A","B","C","D","E","F","G","H","I","J","K","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const LowerCaseAlphabets =["a","b","c","d","e","f","g","h","i","j","k","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers =["1","2","3","4","5","6","7","8","9","0"];
const specialcharacters =["!","@","#","$","%","^","&","*","(",")","_","=","~","{","}","[","]","|",":",";","'","<",">","?",",",".","/","*","-","+"];


const mix = [
  function uppercase(){
  return UpperCaseAlphabets[Math.floor(Math.random) * UpperCaseAlphabets.length]
},

  function lowercase(){
  return LowerCaseAlphabets[Math.floor(Math.random) * LowerCaseAlphabets.length]
},
  
function nos(){
  return numbers[Math.floor(Math.random) * numbers.length]
},

function specialchar(){
  return specialcharacters[Math.floor(Math.random) * specialcharacters.length]
}
];




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
