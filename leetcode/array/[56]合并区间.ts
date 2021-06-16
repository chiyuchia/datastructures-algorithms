/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (45.78%)
 * Likes:    973
 * Dislikes: 0
 * Total Accepted:    246.8K
 * Total Submissions: 538.3K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]
 * 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 *
 * 示例 2：
 *
 *
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * intervals[i].length == 2
 * 0 i i
 *
 *
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  const result = [];
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  for (const interval of intervals) {
    const lastInterval = result[result.length - 1];
    if (!lastInterval) result.push(interval);
    else {
      if (lastInterval[1] >= interval[0]) {
        result[result.length - 1] = [lastInterval[0], Math.max(lastInterval[1], interval[1])];
      } else {
        result.push(interval);
      }
    }
  }
  return result;
}
// @lc code=end
