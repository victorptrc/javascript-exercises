const palindromes = function (s) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanstring = s
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

  const reversestring = cleanstring.split("").reverse().join("");

  if (cleanstring === reversestring) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
