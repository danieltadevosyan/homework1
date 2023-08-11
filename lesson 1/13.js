// 13 Given an object. Invert it (keys become values and values become keys). If there is more than key for
// that given value create an array.

function invert(obj) {
    const invertedObj = {};

    for (let key in obj) {
        const value = obj[key];
        
        if (invertedObj[value] === undefined) {
            invertedObj[value] = key;
        } else {
            if (!Array.isArray(invertedObj[value])) {
                invertedObj[value] = [invertedObj[value]];
            }
            invertedObj[value].push(key);
        }
    }

    return invertedObj;
}

console.log(invert({ a: "1", b: "2" }));
console.log(invert({ a: "1", b: "2", c: "2" }));
console.log(invert({ a: "1", b: "2",c:"2",d:"2" }));