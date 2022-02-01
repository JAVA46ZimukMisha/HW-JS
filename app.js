//Task1
function Deffered () {
    this.hello = 'Hello';
}
Deffered.prototype.then = function (newValueForHello) {
    return this.hello = newValueForHello(this.hello);
}
Deffered.prototype.resolve = function() {
    return this.hello = 'Hello';
}
const d = new Deffered()
d.then(function (res){console.log('1', res); return 'a'});
d.then(function (res){console.log('2', res); return 'b'});
d.then(function (res){console.log('3', res); return 'c'});
d.resolve('hello');

//task2
Array.prototype.get = function (index) {
    this[index] = this[0];
    this.fill(this[0]);
    return this[index];
}
Array.prototype.set = function (newValue, index) {
    return this[index] = newValue;
}
Array.prototype.setValue = function (newValueToAll) {
    return this.fill(newValueToAll);
}
const myArray = new Array (10, 10)
console.log(myArray.get(12))
console.log(myArray)
console.log(myArray.set(20, 7))
console.log(myArray)
console.log(myArray.setValue(2))

// hw15 add
function groupBy (array, whatToDoFun, criteriaFun, resultFun) {
    const res = array.reduce((result, cur) => {
        result[criteriaFun(cur)] = result[criteriaFun(cur)] === undefined ?  resultFun(): whatToDoFun(resultFun()); return result;
    });
    return res;
}