// . Create a function that takes an array of numbers arr, a string str and return an array of numbers as
// per the following rules:

function sortBy(arr, str = "Asc") {
  let sortedArr = [...arr];
  if (str === "Asc") {
    sortedArr.sort(function (a, b) {
      return a - b;
    });
  }
  if (str === "Desc") {
    sortedArr.sort(function (a, b) {
      return b - a;
    });
  }
  return sortedArr;
}

console.log(sortBy([4, 3, 2, 1], "Asc"));
console.log(sortBy([7, 8, 11, 66]));
console.log(sortBy([7, 8, 11, 66], "Desc"));
