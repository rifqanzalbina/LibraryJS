const ndarray = require('ndarray');
const number = ndarray(new Float32Array([10,5,7,3,8,5,9,6]),[8]);

const total = number.data.reduce((acc,val) => acc + val, 0);
console.log('Total : ', total);

const average = total / number.shape[0];
console.log("Rata rata : ", average)

const max = Math.max(...number.data);
console.log('Nilai Maksimum : ', max);