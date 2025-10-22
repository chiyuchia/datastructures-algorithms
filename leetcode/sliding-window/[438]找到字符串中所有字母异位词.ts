/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  const ans: number[] = [];
  const sLen = s.length;
  const pLen = p.length;
  if (sLen < pLen) {
    return [];
  }
  let left = 0;
  let right = 0;
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  while (right < pLen) {
    sCount[s[right].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    pCount[p[right].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    right++;
  }
  if (sCount.toString() === pCount.toString()) {
    ans.push(left);
  }
  while (left < sLen - pLen) {
    sCount[s[left].charCodeAt(0) - 'a'.charCodeAt(0)] -= 1;
    sCount[s[left + pLen].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;

    if (sCount.toString() === pCount.toString()) {
      ans.push(left + 1);
    }
    left++;
  }
  return ans;
}
// @lc code=end
