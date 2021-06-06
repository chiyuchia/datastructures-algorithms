/*
 * @Author: 纪煜佳
 * @Date: 2021-06-06 21:29:44
 * @LastEditors: 纪煜佳
 * @LastEditTime: 2021-06-06 21:37:45
 * @Description:
 */

function fib(n: number): number {
  let a = 0;
  let b = 1;
  let result: number;
  if (n === 0) return a;
  if (n === 1) return b;
  for (let i = 2; i <= n; i++) {
    result = (a + b) % 1000000007;
    a = b;
    b = result;
  }
  return result;
}
