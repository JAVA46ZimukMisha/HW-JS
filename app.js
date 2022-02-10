/* 
task 1
function getRandomNumber(min, max) {
    todo min - minimal value, max - max value (inclusive)
    exmple: getRandomNumber(0, 1) - returns number 0 or 1
    if min > max you should swap values 
    swap should be without additional variable in 1 line code
}
task 2
write the function concatinate(prefix) {...}
that by using the following code 
const concatApp = concatinate('App -')
const concatMassage = concatApp('Test status: Done)'
console log (concateMassage) - App - Test status: Done
*/
//task1
function getRandomNumber(min, max) {
    [min, max] = [min, max].sort((a, b) => a-b);
    return Math.floor(Math.random()*((max+1)-min) +min);
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
