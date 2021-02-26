/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 旋转数组
 *
 * https://leetcode-cn.com/problems/rotate-array/description/
 *
 * algorithms
 * Medium (45.41%)
 * Likes:    889
 * Dislikes: 0
 * Total Accepted:    229.9K
 * Total Submissions: 503.2K
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 *
 *
 *
 * 进阶：
 *
 *
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 *
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 *
 *
 * 示例 2:
 *
 *
 * 输入：nums = [-1,-100,3,99], k = 2
 * 输出：[3,99,-1,-100]
 * 解释:
 * 向右旋转 1 步: [99,-1,-100,3]
 * 向右旋转 2 步: [3,99,-1,-100]
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -2^31
 * 0
 *
 *
 *
 *
 *
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate_1(nums: number[], k: number): void {
  k = k % nums.length;
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
}

function rotate_2(nums: number[], k: number): void {
  k = k % nums.length;
  if (k === 0) return;
  nums.splice(0, 0, ...nums.splice(nums.length - k));
}

const reserve = (nums: number[], start: number, end: number): void => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

function rotate(nums: number[], k: number): void {
  const l = nums.length;
  k = k % l;
  reserve(nums, 0, l - 1);
  reserve(nums, 0, k - 1);
  reserve(nums, k, l - 1);
}
// @lc code=end
