const sumAll = function (first, second) {
  if (
    !Number.isInteger(first) ||
    !Number.isInteger(second) ||
    first < 0 ||
    second < 0
  ) {
    return "ERROR";
  }
  let low;
  let high;

  if (first > second) {
    low = second;
    high = first;
  } else {
    low = first;
    high = second;
  }

  let sum = 0;
  for (let i = low; i <= high; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
