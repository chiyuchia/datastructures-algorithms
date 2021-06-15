/*
 * @Author: Yoga
 * @Date: 2021-02-23 22:40:41
 * @LastEditors: 纪煜佳
 * @LastEditTime: 2021-06-16 01:03:00
 * @Description: 选择排序
 */

const selectionSort = (nums: number[]) => {
  let minIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < nums.length; j++) if (nums[j] < nums[minIndex]) minIndex = j;
    [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
  }
  return nums;
};
