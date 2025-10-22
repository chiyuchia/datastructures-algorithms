/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const tempSet = new Set<string>();
  const strLen = s.length;
  let ans = 0;
  let left = 0;
  let right = -1;
  while (left < strLen) {
    if (left !== 0) {
      tempSet.delete(s.charAt(left - 1));
    }
    while (right + 1 < strLen && !tempSet.has(s.charAt(right + 1))) {
      tempSet.add(s.charAt(right + 1));
      right++;
    }
    ans = Math.max(right - left + 1, ans);
    left++;
  }
  return ans;
}
// @lc code=end
