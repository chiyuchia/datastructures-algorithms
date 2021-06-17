/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (64.65%)
 * Likes:    1138
 * Dislikes: 0
 * Total Accepted:    353.9K
 * Total Submissions: 547.5K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 * 示例 1:
 *
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 *
 *
 * 示例 2:
 *
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 *
 * 说明:
 *
 * 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 *
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  const pivotIndex = nums.length - k;
  const pivot = nums[pivotIndex];
  const less = [];
  const more = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === pivotIndex) continue;
    if (nums[i] < pivot) less.push(nums[i]);
    else more.push(nums[i]);
  }
  if (more.length === k - 1) return pivot;
  else if (more.length > k - 1) return findKthLargest(more, k);
  else return findKthLargest(less, k - more.length - 1);
}
// @lc code=end
