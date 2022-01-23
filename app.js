const ar = [-10, 50, -13, 80, 40, 70];
let str = '';
//Task1
function myForEach(array, callbackFunction) {
    for (let i = 0; i < array.length; i++) {
        callbackFunction(array[i], i, array); 
    }
}
myForEach(ar, n => str += '#' + n);
console.log(str);
//task2
const ar1 = [-10, 50, -13, 80, 40, 70];
function myMap( array, callBackFunc) {
    const arr1 = [];
    myForEach(array, (n, i, ar) => arr1.push(callBackFunc(n, i, ar)));
    return arr1;
}
const ar2 = myMap(ar1, n => n = n*2)
console.log(ar2);

