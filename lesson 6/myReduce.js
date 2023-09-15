const cb = (acc, item) => acc + item;

Array.prototype.myReduce = function (callback, initialValue) {
  let i = initialValue === undefined ? 1 : 0;
  initialValue = initialValue ?? this[0];
  let acc = initialValue;
  for (i; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};

let arr2 = [1, 2, 3];

console.log(arr2.myReduce((acc, item) => acc + item));
