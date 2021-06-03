const fibonacci = function(a) {
    a = parseInt(a);   
    let fibArray = [1, 1]
    if (a < 0) {
        return "OOPS";
    }

    for (i = 2; i < a; i++) {
        fibArray[i] = fibArray[i-1] + fibArray[i - 2];
    }
    return fibArray[a - 1];
};

console.log(fibonacci(6));

module.exports = fibonacci;
