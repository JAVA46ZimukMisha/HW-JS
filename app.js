//task 1
console.log("a" + `${"a"-"s"}` + "aS");


// task 2
console.log(calculator(5,0,8));
function calculator(a, b, c) {
    switch(c) {
    case 1: return a + b;
    case 2: return a - b;
    case 3: return a * b;
    case 4: if (b == 0) {
        return "error: it's impossible to divide in 0";
        }
        else {
            return a / b;
        }
    default: return "error; please, enter operator from 1 to 4";
    }
}


// task 3
console.log(sumSelery(5)(10, 3));
function sumSelery (howManyMonths) {
    return  function monthSelery (wage, hours) {
        return howManyMonths * (wage * hours);
    }
}