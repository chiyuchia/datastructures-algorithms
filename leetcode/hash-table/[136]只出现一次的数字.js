/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (!Array.isArray(nums) || !nums.length) return;
  let map = {};
  for (let num of nums) {
    if (map[num]) map[num]++;
    else map[num] = 1;
  }
  for (let num of nums) {
    if (map[num] === 1) return num;
  }
};
// @lc code=end
