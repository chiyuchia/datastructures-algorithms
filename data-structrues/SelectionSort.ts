/*
 * @Author: Yoga
 * @Date: 2021-02-23 22:40:41
 * @LastEditors: Yoga
 * @LastEditTime: 2021-02-23 23:47:06
 * @Description: 选择排序
 */

const selectionSort = (nums: number[]) => {
  let minIndex: number;
  for (let i = 0; i < nums.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < nums.length; j++) if (nums[minIndex] > minIndex[j]) minIndex = j;
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
};
