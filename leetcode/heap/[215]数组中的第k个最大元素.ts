/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (64.65%)
 * Likes:    1138
 * Dislikes: 0
 * Total Accepted:    353.9K
 * Total Submissions: 547.5K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 * 示例 1:
 *
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 *
 *
 * 示例 2:
 *
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 *
 * 说明:
 *
 * 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 *
 */

// @lc code=start

class MinHeap {
  data = [];

  getSize() {
    return this.data.length;
  }

  getTop() {
    if (!this.getSize()) return undefined;
    return this.data[0];
  }

  getParentIndex(index: number) {
    if (index === 0) return undefined;
    return Math.floor(index / 2);
  }

  getLeftChildIndex(index: number) {
    const leftIndex = index * 2;
    return leftIndex <= this.data.length ? leftIndex : undefined;
  }

  getRightChildIndex(index: number) {
    const rightIndex = index * 2 + 1;
    return rightIndex <= this.data.length ? rightIndex : undefined;
  }

  upNode(index: number) {
    let currentIndex = index;
    const parentIndex = this.getParentIndex(index);
    if (this.data[index] < this.data[parentIndex]) {
      [this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[index]];
      currentIndex = parentIndex;
    }
    if (currentIndex !== index) this.upNode(currentIndex);
  }

  downNode(index: number) {
    let currentIndex = index;
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    if (leftChildIndex < this.data.length && this.data[currentIndex] > this.data[leftChildIndex]) {
      currentIndex = leftChildIndex;
    }
    if (rightChildIndex < this.data.length && this.data[currentIndex] > this.data[rightChildIndex]) {
      currentIndex = rightChildIndex;
    }
    if (currentIndex !== index) {
      [this.data[index], this.data[currentIndex]] = [this.data[currentIndex], this.data[index]];
      this.downNode(currentIndex);
    }
  }

  insert(value: number) {
    this.data.push(value);
    this.upNode(this.getSize() - 1);
  }

  deleteHead() {
    if (this.getSize() === 1) {
      this.data.pop();
    } else {
      this.data[0] = this.data.pop();
      this.downNode(0);
    }
  }

  replaceHead(value: number) {
    this.data[0] = value;
    this.downNode(0);
  }
}

function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinHeap();
  for (let i = 0; i < nums.length; i++) {
    if (minHeap.getSize() < k) {
      minHeap.insert(nums[i]);
    } else if (nums[i] > minHeap.getTop()) {
      minHeap.replaceHead(nums[i]);
    }
  }

  return minHeap.getTop();
}

// @lc code=end
