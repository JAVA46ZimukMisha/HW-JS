const ar = [-10, 50, -13, 80, 40, 70];
let str = '';
//Task1
function myForEach(array, callbackFunction) {
    for (let i = 0; i < ar.length; i++) {
        callbackFunction(array[i]); 
    }
}
myForEach(ar, n => str += '#' + n);
console.log(ar);
//task2
const ar1 = [-10, 50, -13, 80, 40, 70];
function myMap( array, callBackFunc) {
    const arr1 = [];
    myForEach(array, n => arr1.push(callBackFunc(n)));
    return arr1;
}
const ar2 = myMap(ar1, n => n = n*2)
console.log(ar2);

