// 5 . Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
// row and print them as an array.


let arr = [
[3, 4, 5],
[1, 0, 0],
[4, 5, 4],
[8, 8, -1]
]
let arr2 =[[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]] 

let arr3 = [[1], [2], [3], [4]];

function calcArrLine (x) {
    let newArr = [];
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            sum = sum + x[i][j];
            if (j === x[i].length-1) {
                newArr.push(sum)
                sum = 0;
            }
        }
    } 
    return newArr
}

console.log(calcArrLine(arr));
console.log(calcArrLine(arr2));
console.log(calcArrLine(arr3));