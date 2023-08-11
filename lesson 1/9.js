// 9 Write a program to check the validity of password input by users. Validation :
// At least 1 letter between [a-z] and 1 letter between [A-Z].
// At least 1 number between [0-9].
// At least 1 character from [$#@].
// Minimum length 6 characters.
// Maximum length 16 characters

function checkValidation(str) {
    const charArray = [];
    const maxChar = 16;
    const minChar = 6;
    const smallReg = /[a-z]/;
    const bigReg = /[A-Z]/;
    const numbers = /[0-9]/;
    const sim = /[$#@]/;


    for (const char of str) {
          charArray.push(char);
    }
    if (charArray.length < minChar  || charArray.length > maxChar ) {
        return "invalid"
    }
    if (!smallReg.test(charArray) || !bigReg.test(charArray)) {
        return "invalid";
      }
      if (!numbers.test(charArray)) {
        return "invalid";
      }
    
      if (!sim.test(charArray)) {
        return "invalid";
      }
    
      return "valid"; 
}

console.log(checkValidation("12asdf"))
console.log(checkValidation("Aaza1234566#"))
