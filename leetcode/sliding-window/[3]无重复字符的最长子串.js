/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (31.62%)
 * Likes:    2523
 * Dislikes: 0
 * Total Accepted:    233.3K
 * Total Submissions: 737.8K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例 1:
 *
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const charSet = new Set();
  const n = s.length;
  let result = 0;
  let fast = -1;
  for (let i = 0; i < n; i++) {
    if (i > 0) charSet.delete(s.charAt(i - 1));
    while (fast + 1 < n && !charSet.has(s.charAt(fast + 1))) {
      charSet.add(s.charAt(fast + 1));
      fast++;
    }
    result = Math.max(result, fast - i + 1);
  }
  return result;
};
// @lc code=end
