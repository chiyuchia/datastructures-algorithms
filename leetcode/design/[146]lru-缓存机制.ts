/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存机制
 *
 * https://leetcode-cn.com/problems/lru-cache/description/
 *
 * algorithms
 * Medium (52.49%)
 * Likes:    1440
 * Dislikes: 0
 * Total Accepted:    178.4K
 * Total Submissions: 339.9K
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
 * 
 * 
 * 
 * 实现 LRUCache 类：
 * 
 * 
 * LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value)
 * 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 0 
 * 最多调用 3 * 10^4 次 get 和 put
 * 
 * 
 */

class DoubleLinkListNode {
  key: number | undefined;
  val: number | undefined;
  next: DoubleLinkListNode | null;
  prev: DoubleLinkListNode | null;
  constructor(key?: number, val?: number) {
    if (key !== undefined) {
      this.key = key;
    }
    if (val !== undefined) {
      this.val = val;
    }
  }
}

class DoubleLinkList {
  head: DoubleLinkListNode | null;
  tail: DoubleLinkListNode | null;
  constructor() {
    this.head = new DoubleLinkListNode();
    this.tail = new DoubleLinkListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertToHead(node: DoubleLinkListNode) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  deleteNode(node: DoubleLinkListNode) {
    if (!node) return;
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
  }

  deleteLastNode() {
    if (this.tail.prev === this.head) return -1;
    const lastNode = this.tail.prev;
    const key = lastNode.key;
    this.deleteNode(lastNode);
    return key;
  }
}

class LRUCache {
  map: Map<number, DoubleLinkListNode>;
  doubleLinkList: DoubleLinkList;
  capacity = 0;
  constructor(capacity: number) {
    this.map = new Map();
    this.doubleLinkList = new DoubleLinkList();
    this.capacity = capacity;
  }

  get(key: number) {
    if (!this.map.has(key)) return -1;
    else {
      const targetNode = this.map.get(key);
      this.doubleLinkList.deleteNode(targetNode);
      this.doubleLinkList.insertToHead(targetNode);
      return targetNode.val;
    }
  }

  put(key: number, val: number) {
    const newNode = new DoubleLinkListNode(key, val);
    if (this.map.has(key)) {
      const targetNode = this.map.get(key);
      this.doubleLinkList.deleteNode(targetNode);
    } else if (this.map.size >= this.capacity) {
      const lastKey = this.doubleLinkList.deleteLastNode();
      this.map.delete(lastKey);
    }
    this.map.set(key, newNode);
    this.doubleLinkList.insertToHead(newNode);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
