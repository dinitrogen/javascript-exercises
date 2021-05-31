const sumAll = function(integer1, integer2) {
    let sum = 0;
    let range = Math.abs(parseInt(integer2) - parseInt(integer1));

    if (typeof integer1 != "number" || typeof integer2 != "number") {
        return "ERROR";
    }
    else if (integer1 < 0 || integer2 < 0) {
        return "ERROR";
    }
    else if (parseInt(integer1) <= parseInt(integer2)) {
        for (i = parseInt(integer1); i <= range + 1; i++) {
            sum += i;
        }
    }
    else {
        for (i = parseInt(integer2); i <= range + 1; i++) {
            sum += i;
            }
    }
    
    return sum;
};


// Console test for debugging
console.log(sumAll(1, 5));


module.exports = sumAll;
