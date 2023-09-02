// . Տրված է թվերի մատրիցա(զանվածների երկարթյնը կարող է տարբեր լինել) գտնել
// ամենամեծ գմարը նեցող array-ի ինդեքսը:


const matrix = [
    [1, 2, 3],
    [4, 5, 6, 7],
    [8, 9],
    [10, 11, 12, 13, 14]
];

const matrixArray = [[1, 5, 9, 8, 7], [8, 8, 9, 7, 8], [2, 6, 6, 6, 5]];

function mergeArr(arr) {
    const newArr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            count += arr[i][j];
        }
        newArr.push(count);
        count = 0;
    }
    return findMax(newArr);
}


function findMax(arr) {
    let matrixValueIndex = 0;
    let maxValue =  arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            arr[i] = maxValue;
            matrixValueIndex++;
        } 
    }
    return matrixValueIndex
       
}

console.log(mergeArr(matrix))

console.log(mergeArr(matrixArray))