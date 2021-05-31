const removeFromArray = function(userArray, ...elemsToRemove) {

    for (arg = 1; arg < arguments.length; arg++) {

        for (i = 0; i < userArray.length; i++) {
            if (userArray[i] === arguments[arg]) {
                userArray.splice(i, 1);
                break;
            }
            else {
                continue;
            }
        }
    }
    return userArray;

};

// My own test for debugging purposes
console.log(removeFromArray([0,1,2,3], 2, 3, 1));

module.exports = removeFromArray;
