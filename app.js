function encode(num, codingString) {
    if (validateCodingString(codingString)) {
        return encodeIfCodingStringCorrect(num, codingString);
    }   
    else return "error! Coding string has repeated symbols"
}
function encodeIfCodingStringCorrect (num, codingString) {
    let res = "";
    do {
        const digit = Math.trunc(num % codingString.length); // [Daniel] trunc is not reuired
        const symbol = getSymbol(digit, codingString);
        res = symbol + res;
        num = Math.trunc(num/codingString.length);
    }while(num >= 1);
    return res;
}
function getSymbol(digit,codingString) {
    return "" + codingString[digit];                    // [Daniel] // "" + is not required
}
function validateCodingString (codingString) {
    let check = true;
    for (let i = 0; i < codingString.length; i++) {
        for (let j = 0; j< codingString.length; j++) { // [Daniel] could begin from i+1
            if (codingString[i] == codingString[j] && i != j) {
                check = false;
            }
        }
    }
    return check;
}
console.log(encode(165, "*&$#@!"));
