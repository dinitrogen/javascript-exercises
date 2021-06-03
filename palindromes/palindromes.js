const palindromes = function (str) {
    let strLetters = str.toLowerCase().split("");
    let alphaOnly = strLetters.filter(function(character) {
        if (character.match(/[a-z]/i)) {
            return true;
        }
    });
    str = alphaOnly.join("");
    let strLen = str.length;
    
    let revLetters = [];
    for (i = strLen - 1; i >= 0; i--) {
        revLetters[strLen - i - 1] = alphaOnly[i];
    }
    let revStr = revLetters.join("");
    return str === revStr;
};

// Testing function
console.log(palindromes("bo.b"));


module.exports = palindromes;
