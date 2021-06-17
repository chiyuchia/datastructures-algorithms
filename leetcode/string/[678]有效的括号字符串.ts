/*
 * @lc app=leetcode.cn id=678 lang=typescript
 *
 * [678] 有效的括号字符串
 *
 * https://leetcode-cn.com/problems/valid-parenthesis-string/description/
 *
 * algorithms
 * Medium (34.45%)
 * Likes:    249
 * Dislikes: 0
 * Total Accepted:    15.3K
 * Total Submissions: 44.4K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：
 *
 *
 * 任何左括号 ( 必须有相应的右括号 )。
 * 任何右括号 ) 必须有相应的左括号 ( 。
 * 左括号 ( 必须在对应的右括号之前 )。
 * * 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
 * 一个空字符串也被视为有效字符串。
 *
 *
 * 示例 1:
 *
 *
 * 输入: "()"
 * 输出: True
 *
 *
 * 示例 2:
 *
 *
 * 输入: "(*)"
 * 输出: True
 *
 *
 * 示例 3:
 *
 *
 * 输入: "(*))"
 * 输出: True
 *
 *
 * 注意:
 *
 *
 * 字符串大小将在 [1，100] 范围内。
 *
 *
 */

// @lc code=start
// function checkValidString(s: string): boolean {
//   const parenthesisStack = [];
//   const starStack = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s.charAt(i) === '(') {
//       parenthesisStack.push(i);
//     } else if (s.charAt(i) === ')') {
//       if (parenthesisStack.length) {
//         parenthesisStack.pop();
//       } else if (starStack.length) {
//         starStack.pop();
//       } else return false;
//     } else {
//       starStack.push(i);
//     }
//   }
//   if (parenthesisStack.length > starStack.length) return false;
//   while (parenthesisStack.length) {
//     if (parenthesisStack.pop() > starStack.pop()) return false;
//   }
//   return true;
// }

function checkValidString(s: string): boolean {
  let min = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(') {
      min++;
      max++;
    } else if (s.charAt(i) === ')') {
      min = Math.max(0, min - 1);
      if (--max < 0) return false;
    } else {
      max++;
      min = Math.max(0, min - 1);
    }
  }
  return min === 0;
}
// @lc code=end
