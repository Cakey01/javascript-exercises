const factorial = function(n) {
  if (Number.isInteger(n)) {
    if (n === 0 || n === 1) {
      return 1;
    } else if (n > 1) {
      return n * factorial(n - 1)
    }
  }
}

console.log(factorial(5));

// Do not edit below this line
module.exports = factorial;
