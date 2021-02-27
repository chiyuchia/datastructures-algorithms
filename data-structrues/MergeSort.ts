/*
 * @Author: Yoga
 * @Date: 2021-02-23 23:40:35
 * @LastEditors: Yoga
 * @LastEditTime: 2021-02-23 23:46:11
 * @Description: 归并排序
 */

const merge = (left: number[], right: number[]) => {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
};

const mergeSort = (nums: number[]) => {
  if (nums.length < 2) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};
