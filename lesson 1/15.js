// 15 Given two objects. Write a function that performs shallow compare.

function shallowCompare(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

const a1 = { a: '1' };
const b1 = { a: '1' };
console.log(shallowCompare(a1, b1)); 

const a2 = { a: '1' };
const b2 = { a: '1', b: '2' };
console.log(shallowCompare(a2, b2)); 

const a3 = {};
const b3 = {};
console.log(shallowCompare(a3, b3)); 