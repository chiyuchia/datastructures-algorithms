/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  const numSet = new Set<number>(nums);
  let result = 0;
  numSet.forEach((num) => {
    if (!numSet.has(num - 1)) {
      let curNum = num;
      let curLongestConsecutive = 1;
      while (numSet.has(curNum + 1)) {
        curNum = curNum + 1;
        curLongestConsecutive++;
      }
      result = Math.max(result, curLongestConsecutive);
    }
  });
  return result;
}
// @lc code=end
