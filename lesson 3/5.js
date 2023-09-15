function filterRowsBySum(matrix, k) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const sum = row.reduce((acc, val) => acc + val, 0);

    if (sum <= k) {
      result.push(row);
    }
  }

  return result;
}

const originalMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const k = 12;

const filteredMatrix = filterRowsBySum(originalMatrix, k);

console.log(filteredMatrix);
