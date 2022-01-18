//task 1
const arHw = [13, 28,4,15, 25, -10, 40, 17, 27];
arHw.sort((a,b) => {
    if (a%2 && b%2) {
        return b-a;
    }
    if (!(a%2) && b%2) {
        return -1;
    }
    if (a%2 && !(b%2)) {
        return 1;
    }
    if  (!(a%2) && !(b%2)) {
        return a-b;
    }
    else return 0;
});
console.log(arHw);
console.log(" ");


//task2
const sourceMatrix = [[1,2],[3,4], [5,6]]; 
const resultMatrix = matrixTransp(sourceMatrix);
displayMatrix(resultMatrix);
function matrixTransp(matrix) {
const result = [];
    for (let i=0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!result[j]) {
                result[j] = [];
            };
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}
function displayMatrix(matrix) {
    for (let i=0; i<matrix.length; i++) {
        let row = '';
        for (let j=0; j<matrix[i].length; j++){
            row = row + matrix[i][j] + ' ';
        }
        console.log(row);
    }
}

