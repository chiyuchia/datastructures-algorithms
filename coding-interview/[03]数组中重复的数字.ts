function findRepeatNumber(nums: number[]): number {
  return nums.sort().find((num, index) => num === nums[index - 1]);
}
