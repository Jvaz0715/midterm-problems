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


// still needs to account for multiple exclamation points
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

function countWords() {
}

function containsDigit() {
}

function containsLowerCase() {
}

function containsUpperCase() {
}

function containsNonAlphanumeric() {
}

function containsSpace() {
}

function digits() {
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