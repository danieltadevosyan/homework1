//. Տրված է թվերի մատրիցա (nxm), դրս բերել բոլոր տողերի մինիմմներից բաղկացած
// զանգվածը:



const matrix = [
    [1, 2, 3],
    [4, 5, 6, 7],
    [8, 9],
    [10, 11, 12, 13, 14]
];

const matrixArray = [[1, 5, 9, 8, 7], [8, 8, 9, 7, 8], [2, 6, 6, 6, 5]];

function findMin(arr) {
    const minimal = [];

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        const minValue = Math.min(...row);
        minimal.push(minValue);
    }

    return minimal;
}

console.log(findMin(matrix))