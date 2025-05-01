const reverseString = function (s) {
  //   r = "";
  //   for (let i = 0; i < s.length; i++) {
  //     r = r + s[s.length - 1 - i];
  //   }
  //   return r;

  return s.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
