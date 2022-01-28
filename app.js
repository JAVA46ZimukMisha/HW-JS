function displayOccurrences(array) {
    const res = createObjOccurrences (array);
    Object.entries(res).sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0]) : res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`));
}
//Task1
function createObjOccurrences(array) {
    return array.reduce((result, cur) => {result[cur] = result[cur] === undefined ? 1 : result[cur] + 1; return result}, {});
}
// Task2
function countBy (array, cbf) {
    return array.reduce((result, cur) => {result[cbf(cur)] = result[cbf(cur)] === undefined ? 1 : result[cbf(cur)] + 1; return result}, {});
    
}
const array100 = ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"];
displayOccurrences(array100);
const arr99 = [6.4, 7.3, 6.5, 6.9];
const statistics1 = countBy(arr99, element => Math.floor(element));
console.log(statistics1);
const arr98 = ['abcd', 'lmnr', 'ab', 'dddd'];
const statistics2 = countBy(arr98, element => element.length);
console.log(statistics2);
const arr97 = [{age : 25, id : 123, name : "Vasya"}, 
{age : 50, id : 123, name : "Vasya"},
{age : 25, id : 123, name : "Vasya"},
{age : 70, id : 123, name : "Vasya"}]
const statistics3 = countBy(arr97, element => element.age);
console.log(statistics3);


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
    createPerson(126, "Sara", createAddress("Lod", "Sokolov"))
] 
//Task6 from hw14 extra

const counts = persons.reduce((result, cur) => {result[cur.address.city] = (result[cur.address.city] !== undefined) ? result[cur.address.city]+1 : 1; return result}, {});
console.log(counts);