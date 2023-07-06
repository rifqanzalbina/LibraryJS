const ndarray = require('ndarray');
const matrixA = ndarray(new Float32Array([1,2,3,4,5,6]),[2,3])
const matrixB = ndarray(new Float32Array([7,8,9,10,11,12]), [2,3])

// Maek Variable First
const timeMatrix = ndarray(new Float32Array(matrixA.size),matrixA.shape)
const sumMatrix = ndarray(new Float32Array(matrixA.size), matrixA.shape)
const minesMatrix = ndarray(new Float32Array(matrixA.size),matrixA.shape)
const divideMatrix = ndarray(new Float32Array(matrixA.size), matrixA.shape)

// The logic 
for(let i = 0; i < matrixA.size; i++){
    divideMatrix.data[i] = matrixA.data[i] % matrixB.data[i];
}
for(let i = 0; i < matrixA.size; i++){
    minesMatrix.data[i] = matrixA.data[i] - matrixB.data[i];
}
for(let i = 0; i < matrixA.size; i++){
    sumMatrix.data[i] = matrixA.data[i] + matrixB.data[i];
}
for(let i = 0; i < matrixA.size; i++){
    timeMatrix.data[i] = matrixA.data[i] * matrixB.data[i];
}

// Print Out
console.log("Penjumlahan matrix");
console.log(sumMatrix);
console.log("Perkalian Matrix");
console.log(timeMatrix);
console.log("Pengurangan matrix");
console.log(minesMatrix);
console.log("Pmebagian matrix");
console.log(divideMatrix);