function encode(num, codingString) {
    let validate = validateCodingString(codingString);
    if (validate == true) {
        let res = "";
        do {
            const digit = Math.trunc(num % codingString.length);
            const symbol = getSymbol(digit, codingString);
            res = symbol + res;
            num = Math.trunc(num/codingString.length);
        }while(num >= 1);
        return res;
    }   
    else return "error! Coding string has repeated symbols"
}
function getSymbol(digit,codingString) {
    return "" + codingString[digit];
}
function validateCodingString (codingString) {
    let check = true;
    for (let i = 0; i < codingString.length; i++) {
        for (let j = 0; j< codingString.length; j++) {
            if (codingString[i] == codingString[j] && i != j) {
                check = false;
            }
        }
    }
    return check;
}
console.log(encode(1786, "*&$#@!"));
