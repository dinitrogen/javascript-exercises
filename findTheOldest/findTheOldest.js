const findTheOldest = function(peopleArray) {
    const sortedPeopleArray = peopleArray.sort(function(a, b) {
        let ageA;
        if (a.yearOfDeath) {
            ageA = a.yearOfDeath - a.yearOfBirth
        } else {
            ageA = (new Date()).getFullYear() - a.yearOfBirth; 
        }
        let ageB;
        if (b.yearOfDeath) {
            ageB = b.yearOfDeath - b.yearOfBirth
        } else {
            ageB = (new Date()).getFullYear() - b.yearOfBirth; 
        }
        if (ageA > ageB) {
            return -1;
        } else {
            return 1;
        } 
    });
    return sortedPeopleArray[0];

};


// Testing the function
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.table(findTheOldest(people));



module.exports = findTheOldest;
