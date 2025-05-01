const getAge = function (person) {
  if (!person) return undefined;
  if (person.hasOwnProperty("yearOfDeath")) {
    return person.yearOfDeath - person.yearOfBirth;
  } else {
    return new Date().getFullYear() - person.yearOfBirth;
  }
};

const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    if (getAge(current) > getAge(oldest)) {
      return current;
    } else {
      return oldest;
    }
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
