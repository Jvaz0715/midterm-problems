function isEvenlyDivisible(x, y) {
  if (x % y === 0) {
    return true;
  } else {
    return false
  }
}

function halfSquare(num) {
  let numSquared = num * num;
  let numSquaredHalf = numSquared / 2;
  return numSquaredHalf;
}

//console.log(halfSquare(8))

function isLong(str) {
  if (str.length >= 15) {
    return true;
  } else {
    return false;
  } 
}

function exclaim(str) {
  let lastIndex = str[str.length -1];
  let noExclaims = str.replaceAll('!', '')
  if (lastIndex !== '!') {
    return str + '!';
  } else {
    return noExclaims + '!'
  }
}

//console.log(exclaim('Hello'))
//console.log(exclaim('Hello!!!'))

function countWords(str) {
  let wordArray = str.split(' ');
  let wordCount = wordArray.length;
  return wordCount;
}

//console.log(countWords('James Vazquez was here'))


function containsDigit(str) {
  for (i = 0; i < str.length; i++) {
    let char = str[i];
    if (
      char === '0' ||
      char === '1' ||
      char === '2' ||
      char === '3' ||
      char === '4' ||
      char === '5' ||
      char === '6' ||
      char === '7' ||
      char === '8' ||
      char === '9') {
        return true;
      }
  }
  
  if (str.length < 1){
    return false;
  } else {
    return false;
  }
}

function containsLowerCase(str) {
  if (str !== str.toUpperCase()) {
    return true;
  } else if (str === str.toUpperCase()) {
    return false;
  }
}


function containsUpperCase(str) {
  if (str !== str.toLowerCase()) {
    return true;
  } else if (str === str.toLowerCase()) {
    return false;
  }
}

function containsNonAlphanumeric(str) {
  let char = str[i];
  if (str.length < 1) {
    return false;
  } else if (/^[a-zA-Z]+$/.test(str)) {
    return false;
  }else if (/^[0-9]+$/.test(str)) {
    return false;
  } else {
    return true;
  }
}

function containsSpace(str) {
  if (str.includes(' ')) {
    return true;
  } else {
    return false;
  }
}

function digits(num) {
  let output = [];
  let numString = num.toString();
  for (let i = 0; i < numString.length; i++) {
    let numberAgain = Number(numString[i]);
    if (numberAgain !== NaN){
      output.push(numberAgain);
  }
    }
  return output;
}

console.log(digits(1234))
console.log(digits(-1234))

function truncate(str) {
  let outputString = '';
  if (str.length <= 14) {
    return str;
  }

  for (let i = 0; i < 8; i++) {
    if (str.length >= 15){
    outputString = outputString + str[i];
    } 
  }
  return outputString + '...'
}

//console.log(truncate('Hello my name is James V. and I am coding'))

function isValidPassword() {
}

function onlyPunchy() {
}

module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}