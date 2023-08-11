// 7 Takes two arrays and insert the second array in the middle of the first array. The first array always has
// two elements

function insert (arr,arr2) {
    let middleIndex = 1;
    arr.splice(middleIndex, 0, ...arr2);
    return arr;
}

console.log(insert([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))
console.log(insert([15, 150], [45, 75, 35]))
console.log(insert([[1, 2], [5, 6]], [[3, 4]]))