/*
 * @Author: Yoga
 * @Date: 2021-02-23 23:20:08
 * @LastEditors: Yoga
 * @LastEditTime: 2021-02-23 23:23:46
 * @Description: 快速排序
 */

const quickSort = (nums: number[]) => {
  if (nums.length < 2) return nums;
  let pivot = nums[0];
  const less = [];
  const more = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= pivot) less.push(nums[i]);
    else more.push(nums[i]);
  }
  return [...quickSort(less), pivot, ...quickSort(more)];
};
