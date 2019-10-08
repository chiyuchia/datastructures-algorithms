/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (hashMap.hasOwnProperty(complement)) {
      return [hashMap[complement], i]
    } else {
      const key = nums[i]
      hashMap[key] = i
    }
  }
}
// @lc code=end

export default twoSum
