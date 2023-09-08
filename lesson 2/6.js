//. Write a function which parses string integers. If it's not possible to parse, then add null

function parseInteger(arr) {
  return arr.map((item) => {
    const parsed = parseInt(item, 10);
    return isNaN(parsed) ? null : parsed;
  });
}

console.log(parseInteger(["1", "2", "34"])); //  [1, 2, 34]
console.log(parseInteger(["1", "px", "2323"])); //  [1, null, 2323]
