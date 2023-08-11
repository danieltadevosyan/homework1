// 12 Write a function, which receives an array as an argument which elements arrays of numbers. Find
// product of biggest negative number of each array. If there is not any negative number, ignore that
// array. Check that items of the given array are arrays.

function multiplyLargestNegative(arr) {
    if (!Array.isArray(arr)) {
        return 'Invalid Argument';
    }

    let product = 1;
    let foundNegative = false;

    for (const subarray of arr) {
        if (!Array.isArray(subarray)) {
            return 'Invalid Argument';
        }

        let largestNegative = Number.NEGATIVE_INFINITY;

        for (const num of subarray) {
            if (typeof num !== 'number') {
                return 'Invalid Argument';
            }

            if (num < 0 && num > largestNegative) {
                largestNegative = num;
                foundNegative = true;
            }
        }

        if (largestNegative !== Number.NEGATIVE_INFINITY) {
            product *= largestNegative;
        }
    }

    if (!foundNegative) {
        return 'No negatives';
    }

    return product;
}


const example1 = [[2, -9, -3, 0], [1, 2], [-4, -11, 0]];
const example2 = [[3, 4], [11, 0], [5, 6, 7, 8]];
const example3 = [1, 2, 3];

console.log(multiplyLargestNegative(example1)); 
console.log(multiplyLargestNegative(example2)); 
console.log(multiplyLargestNegative(example3)); 
