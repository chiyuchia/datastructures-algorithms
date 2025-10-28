/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  const len = nums.length;
  let result = 0;
  if (len > 0) {
    result = nums[0];
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
    result = Math.max(result, nums[i]);
  }
  return result;
}
// @lc code=end
