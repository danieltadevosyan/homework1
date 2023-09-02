Array.prototype.myMap = function (callback) {
  let mapArr = [];
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this);
    mapArr.push(result);
  }
  return mapArr;
};

let arr = [1, 2, 3];

console.log(arr2.myMap((num) => num + 2));
