//10 Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
// If the phone number is less than 10 and longer than 10 digits assume that it is a bad number
// If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
// and return remaining 10 digits.
// If the phone number contains + symbol more than one, consider it as a bad number.
// If the phone number contains + symbol not as the first character, consider it as a bad number.

// dorobotka

function cleanPhoneNumber(phoneNumber) {
  const cleanedNumber = phoneNumber.replace(/\s/g, '');

  if (cleanedNumber.length !== 10 && !(cleanedNumber.length === 11 && cleanedNumber[0] === '+')) {
      return "Bad number";
  }

  if (/^\+\d{10}$/.test(cleanedNumber)) {
      return cleanedNumber.slice(1);
  }

  if (/^\d{10}$/.test(cleanedNumber)) {
      return cleanedNumber;
  }

  return "Bad number";
}

console.log(cleanPhoneNumber("455678"));
console.log(cleanPhoneNumber("339 5656888"));
console.log(cleanPhoneNumber("+0008989562"));
console.log(cleanPhoneNumber("45231489562"));
console.log(cleanPhoneNumber("123+2356897452"));

