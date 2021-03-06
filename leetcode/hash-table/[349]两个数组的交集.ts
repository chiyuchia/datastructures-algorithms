/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (73.46%)
 * Likes:    326
 * Dislikes: 0
 * Total Accepted:    158.3K
 * Total Submissions: 215.2K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 *
 *
 * 示例 2：
 *
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 *
 *
 *
 * 说明：
 *
 *
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 *
 *
 */

// @lc code=start
// function intersection(nums1: number[], nums2: number[]): number[] {
//   const numsMap1: { [x: number]: number } = {};
//   const resultMap = {};
//   for (let i = 0; i < nums1.length; i++) numsMap1[nums1[i]] = nums1[i];
//   for (let i = 0; i < nums2.length; i++) if (numsMap1[nums2[i]] !== undefined) resultMap[nums2[i]] = nums2[i];
//   return Object.keys(resultMap).map((key) => resultMap[key]);
// }

// function intersection(nums1: number[], nums2: number[]): number[] {
//   const set1 = new Set(nums1);
//   const set2 = new Set(nums2);
//   const result = [];
//   for (const num of set1) {
//     if (set2.has(num)) result.push(num);
//   }
//   return result;
// }

function intersection(nums1: number[], nums2: number[]): number[] {
  const result = [];
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else if (nums1[i] === nums2[j]) {
      if (!result.length || nums1[i] !== result[result.length - 1]) result.push(nums1[i]);
      i++;
      j++;
    }
  }
  return result;
}

// @lc code=end
