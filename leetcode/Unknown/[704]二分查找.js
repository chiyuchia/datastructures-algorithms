/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let pivot = 0;
  let min = 0;
  let max = nums.length - 1;
  while (min <= max) {
    pivot = min + Math.floor((max - min) / 2);
    if (nums[pivot] === target) return pivot;
    if (nums[pivot] < target) min = pivot + 1;
    if (nums[pivot] > target) max = pivot - 1;
  }
  return -1;
};
// @lc code=end
