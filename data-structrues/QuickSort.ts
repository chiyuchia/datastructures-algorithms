/*
 * @Author: Yoga
 * @Date: 2021-02-23 23:20:08
 * @LastEditors: 纪煜佳
 * @LastEditTime: 2021-06-16 00:58:31
 * @Description: 快速排序
 */

const quickSort = (nums: number[]) => {
  if (nums.length < 2) return nums;
  const pivot = nums[0];
  const left = [];
  const right = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= pivot) left.push(nums[i]);
    else right.push(nums[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};
