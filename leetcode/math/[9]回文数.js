/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const reserve = (n) => {
    let result = 0;
    while (n) {
      result = result * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    return result;
  };
  if (x < 0) return false;
  return reserve(x) === x;
};

// @lc code=end
