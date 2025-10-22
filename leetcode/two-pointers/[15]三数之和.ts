/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      const curSum = nums[i] + nums[left] + nums[right];
      if (curSum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[right]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (curSum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}
// @lc code=end
