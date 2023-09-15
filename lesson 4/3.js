// Write a function that caches the duplication of result of a calculation using closure.
// const cachedCalculation = createCachingFunction();
// console.log(cachedCalculation(5)); // Output: 10 (calculated)
// console.log(cachedCalculation(5)); // Output: 10 (cached)

function createCachingFunction() {
  const cache = {};

  return function (input) {
    if (input in cache) {
      console.log(`${input} (cached)`);
      return cache[input];
    } else {
      const result = input * 2; // Your calculation here
      cache[input] = result;
      console.log(`${input} (calculated)`);
      return result;
    }
  };
}

const cachedCalculation = createCachingFunction();
console.log(cachedCalculation(5)); // Output: 10 (calculated)
console.log(cachedCalculation(5)); // Output: 10 (cached)
