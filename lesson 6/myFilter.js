callback = (word) => word.length > 6;

Array.prototype.myFilter = function (callback) {
  let filterArr = [];
  for (let i = 0; i < this.length; i++) {
    let check = callback(this[i], i, this);
    if (check) {
      filterArr.push(this[i]);
    }
  }
  return filterArr;
};

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.myFilter(callback);

console.log(result);
