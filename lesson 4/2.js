function privateVariable(initialValue) {
  let secretValue = initialValue;

  return {
    get: function () {
      return secretValue;
    },
    set: function (newValue) {
      secretValue = newValue;
    },
  };
}

const secretValue = privateVariable(42);
console.log(secretValue.get()); // Output: 42

secretValue.set(100);
console.log(secretValue.get()); // Output: 100
