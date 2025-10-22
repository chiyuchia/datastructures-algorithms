/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let curArea = Math.min(height[left], height[right]) * (right - left);
  while (right > left) {
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    curArea = Math.max(curArea, Math.min(height[left], height[right]) * (right - left));
  }
  return curArea;
}
// @lc code=end
