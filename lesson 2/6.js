//. Write a function which parses string integers. If it's not possible to parse, then add null

function parseInteger(arr) {
    let parseArr = [...arr]
    for (let index = 0; index < parseArr.length; index++) {
       parseArr[index] *= 1;
       if (!parseArr[index]) {
        parseArr[index] = null;
       }
    }
    return parseArr;
}

console.log(parseInteger(["1", "2", "34"]))

console.log(parseInteger(["1", "px", "2323"])) 