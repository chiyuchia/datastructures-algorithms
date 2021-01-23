/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
  if (!head || !head.next) return false;

  var hashMap = new Map();
  while (head) {
    if (hashMap.get(head)) return true;
    else {
      hashMap.set(head, true);
      head = head.next;
    }
  }
  return false;
};

// @lc code=end

var hasCycle = function (head) {
  if (!head || !head.next) return false;

  var slow = head;
  var fast = head.next;
  while (slow !== fast) {
    if (slow.next && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    } else {
      return false;
    }
  }
  return true;
};
