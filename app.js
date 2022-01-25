function myForEach(array, callbackFunction) {
    for (let i = 0; i < array.length; i++) {
        callbackFunction(array[i], i, array); 
    }
}

// task1
function myFilter (array, cb) {
    const newAr = [];
    myForEach(array, (n, i, a) =>  cb (n, i, a) ? newAr.push(n) : 0);
    return newAr;
}

//task2
function myReduce(array, callback, initialResult) {
    let result;
    if (initialResult) {
        result = initialResult;
        myForEach(array, (n, i, a) => result =callback(result, n,i,a) );
    }
    else {
        result = array[0];
        const newArray = array.slice(1)
        myForEach(newArray, (n, i, a) => result = callback(result, n, i, a) );
    }
    return result;
}
const ar20 = [13, 17,20, 23, 2, 40, 15];
const arEvenOdd = myFilter(ar20, (n,i,a) => a.length %2 == 0 ? n%2 == 0: n%2 == 1);
console.log(arEvenOdd);
const res = myReduce(ar20, (res, cur) => res+cur, 0);
console.log(res);

//task3

function getPerson(persons, city) {
    let indexCity =Object.keys(persons[0].address).indexOf("city");
    const personInTheCity = persons.filter((n, i, a)=> Object.values(persons[i].address)[indexCity] == city);
    return personInTheCity;
}

//task4
function movePersonsNoCityAtBeginning(persons, city) {
    let indexCity =Object.keys(persons[0].address).indexOf("city");
    const arrayNoCity = persons.filter((n, i, a)=> Object.values(persons[i].address)[indexCity] != city);
    const arrayCity = persons.filter((n, i, a)=> Object.values(persons[i].address)[indexCity] == city);
    const res = arrayNoCity.concat(arrayCity);
    return res;
}
function createAddress (city, street) {
    return {city, street}
}
function createPerson(id, name, address) {
    return {id, name, address}
}
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
    createPerson(124, "Olya", createAddress("Rehovot", "Pr.Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
    createPerson(125, "Sara", createAddress("Lod", "Sokolov"))
] 
const rehovot = getPerson(persons, "Rehovot");
console.log(rehovot);
const newArray = movePersonsNoCityAtBeginning(persons, "Rehovot");
console.log(newArray);
