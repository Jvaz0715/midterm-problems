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

console.log(containsLowerCase('hello'))
console.log(containsLowerCase('Hello'))
console.log(containsLowerCase('hELLO'))


function containsUpperCase() {
}

function containsNonAlphanumeric() {
}

function containsSpace() {
}

function digits(num) {
}

function truncate() {
}

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