function isWordInMatrix(matrix, word) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === word[0]) {
        if (dfs(i, j, 0)) {
          return true;
        }
      }
    }
  }

  function dfs(row, col, index) {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      matrix[row][col] !== word[index]
    ) {
      return false;
    }

    if (index === word.length - 1) {
      return true;
    }

    const originalChar = matrix[row][col];
    matrix[row][col] = "";

    const found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);

    matrix[row][col] = originalChar;

    return found;
  }

  return false;
}

const matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

const word = "abc";
console.log(isWordInMatrix(matrix, word));
