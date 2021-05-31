const repeatString = function(str, numRepeats) {
    let repeatedString = '';
    if (numRepeats < 0) {
        return "ERROR"
    }
    for (i = 0; i < numRepeats; i++) {
        repeatedString += str;
    }
    return repeatedString;
};

module.exports = repeatString;
