const ndarray = require('ndarray');
const matrix = ndarray(new Float32Array([1,2,3,4,5,6,7,8,9,1]), [3,3])

const rowAverages = [];

for(let i = 0; i < matrix.shape[0]; i++){
    const row = matrix.pick(i, null);
    const rowSum = row.data.reduce((acc, val) => acc + val, 0);
    const rowAverage = rowSum / row.shape[0];
    rowAverages.push(rowAverage);
}

console.log('Nilai rata rata setiap Baris');
console.log(rowAverages);