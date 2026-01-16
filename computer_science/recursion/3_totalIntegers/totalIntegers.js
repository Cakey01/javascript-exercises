const isObject = (data) => typeof data === 'object' && data !== null;

const totalIntegers = function(data) {
  let count = 0;
  if (!isObject(data)){
    return
  }

  const values = Object.values(data);
  
  for (const value of values) {
    if (Number.isInteger(value)) {
      count++;
    } else if (isObject(data)) {
      count += totalIntegers(value);
    }
  }
  return count;
}
// Do not edit below this line
module.exports = totalIntegers;
