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

function exclaim() {
}

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