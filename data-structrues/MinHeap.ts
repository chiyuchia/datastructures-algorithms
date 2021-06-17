/*
 * @Author: 纪煜佳
 * @Date: 2021-06-18 01:45:39
 * @LastEditors: 纪煜佳
 * @LastEditTime: 2021-06-18 03:04:03
 * @Description: 小顶堆
 */

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
