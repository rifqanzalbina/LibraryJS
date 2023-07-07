const ndarray = require('ndarray');

// Matriks
const matrix = ndarray(new Float32Array([5, 3, 7, 2, 9, 4, 6, 1, 8]), [3, 3]);

// Menginisialisasi nilai maksimum
let max = matrix.data[0];

// Mencari nilai maksimum dalam matriks
for (let i = 1; i < matrix.size; i++) {
  if (matrix.data[i] > max) {
    max = matrix.data[i];
  }
}

// Menampilkan nilai maksimum
console.log('Nilai maksimum:', max);
