/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const swap = (matrix, [x1, y1], [x2, y2]) => {
  const temp = matrix[x1][y1];
  matrix[x1][y1] = matrix[x2][y2];
  matrix[x2][y2] = temp;
};
var rotate = function (matrix) {
  const length = matrix.length;
  // 对角线翻转
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      swap(matrix, [i, j], [j, i]);
    }
  }
  // 垂直方向翻转
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length / 2; j++) {
      swap(matrix, [i, j], [i, length - 1 - j]);
    }
  }
  return matrix;
};
// @lc code=end
