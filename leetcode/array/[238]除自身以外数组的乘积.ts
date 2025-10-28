/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const len = nums.length;
  const result: number[] = [];
  result[0] = 1;
  for (let i = 1; i < len; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  let R = 1;
  for (let i = len - 1; i >= 0; i--) {
    result[i] = result[i] * R;
    R *= nums[i];
  }
  return result;
}
// @lc code=end
