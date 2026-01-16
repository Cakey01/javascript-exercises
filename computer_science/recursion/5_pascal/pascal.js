const pascal = function(n) {
  if (n === 1) {
    return [1];
  } else {
    const prev = [0, ...pascal(n - 1), 0];

    for (i = 0; i < prev.length; i++) {
      prev[i] += prev[i + 1];
    }
    return prev.pop()
  }
};
  
console.log(pascal())

// Do not edit below this line
module.exports = pascal;
