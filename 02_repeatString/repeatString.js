const repeatString = function (s, n) {
  if (n < 0) {
    return "ERROR";
  }
  let r = "";
  for (let i = 0; i < n; i++) {
    r = r + s;
  }

  return r;
};

// Do not edit below this line
module.exports = repeatString;
