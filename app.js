/* 
function getRandomNumber(min, max) {
    todo min - minimal value, max - max value (inclusive)
    exmple: getRandomNumber(0, 1) - returns number 0 or 1
    if min > max you should swap values 
    swap should be without additional variable in 1 line code
}
write the function concatinate(prefix) {...}
that by using the following code 
const concatApp = concatinate('App -')
const concatMassage = concatApp('test status: done)'
console log (concateMassage) - app - test status: done
*/
//task1
function getRandomNumber(min, max) {
    const [mi, ma] = [min, max].sort((a, b) => a-b);
    return Math.floor(Math.random()*((ma+1)-mi) +mi);
} 
console.log(getRandomNumber(15, 5))
//task2
function concatinate(prefix) {
    return function (endString) {
        return prefix + endString;
    }
}
const concatApp = concatinate('App - ');
const concatMessage = concatApp('Test status: Done');
console.log(concatMessage);
