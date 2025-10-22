/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const str of strs) {
    const arr = Array.from(str);
    arr.sort();
    const tempStr = arr.join('');
    const anagram = map.get(tempStr);
    if (!anagram) {
      map.set(tempStr, [str]);
    } else {
      anagram.push(str);
    }
  }
  return Array.from(map.values());
}
// @lc code=end
