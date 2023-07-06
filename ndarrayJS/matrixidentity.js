const ndarray = require('ndarray')

const size = 3;
const identityMatrix = ndarray(new Float32Array(size * size),[size,size])

for(let i = 0; i < size ; i++){
    identityMatrix.set(i,i,1);
}

console.log('Matrix Identitas : ');
console.log(identityMatrix);

