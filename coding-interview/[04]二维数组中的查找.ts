function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  const hLength = matrix.length;
  if (!hLength) return false;
  const vLength = matrix[0].length;
  let j = vLength - 1;
  for (let i = 0; i < hLength; i++) {
    while (matrix[i][j] > target) {
      j--;
    }
    if (matrix[i][j] === target) return true;
  }
  return false;
}
