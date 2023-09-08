// . Given an array, return the sum of numbers that are 18 or over.

const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];

//version without reduce
// function calcMore18(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i] > 18) {
//        }
//     }
//     return sum
// }

// console.log(calcMore18(arr))

//version with reduce

function calcMore18(arr) {
  let arrMore18 = arr.filter((items) => items > 18);
  let sum = arrMore18.reduce((acc, items) => acc + items, 0);
  return sum;
}

console.log(calcMore18(arr));
