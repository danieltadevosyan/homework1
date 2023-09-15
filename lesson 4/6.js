// Implement a memoization function using closure to cache expensive function calls.
// function fibonacci(n) {
//   ...
// }

// const memoizedFibonacci = memoize(fibonacci);
// console.log(memoizedFibonacci(10)); // Output: 55 (calculated)
// console.log(memoizedFibonacci(10)); // Output: 55 (cached)

function memoize(func) {
  const cache = {};

  return function (...args) {
    const key = func.name + args.join("-");
    if (cache[key]) {
      console.log(`${cache[key]} (cached)`);
      return cache[key];
    } else {
      const result = func(...args);
      cache[key] = result;
      console.log(`${result} (calculated)`);
      return result;
    }
  };
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
  }
}

const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10)); // Output: 55 (calculated)
console.log(memoizedFibonacci(10)); // Output: 55 (cached)
