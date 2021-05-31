const leapYears = function(year) {
    let intYear = parseInt(year);

    if (intYear % 4 !== 0) {
        return false;
    }
    else if (intYear % 100 === 0 && intYear % 400 !== 0) {
        return false;
    }
    else {
        return true;
    }

};

// Test run for console debugging
console.log(leapYears(1900));

module.exports = leapYears;
