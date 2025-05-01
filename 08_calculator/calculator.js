const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  result = 0;
  if (array.length > 0) {
    array.forEach((element) => (result += element));
  }
  return result;
};

const multiply = function (array) {
  product = 1;
  if (array.length > 0) {
    array.forEach((element) => (product *= element));
  }
  return product;
};

const power = function (n, e) {
  result = 1;
  for (let i = 0; i < e; i++) {
    result *= n;
  }

  return result;
};

const factorial = function (n) {
  result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
