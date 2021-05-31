const reverseString = function(str) {
    let strLen = str.length;
    let fwdBrokenStr = str.split('');
    let revBrokenStr = [];
    
    for (i = 0; i < strLen; i++) {
        revBrokenStr[i] = fwdBrokenStr[strLen - 1 - i];
    }
    let reversedStr = revBrokenStr.join("");
    return reversedStr;
};

console.log(reverseString("Hello World!"));

module.exports = reverseString;



// 