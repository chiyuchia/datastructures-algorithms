/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) return head;

  var p = head.next;
  head.next = null;
  var temp;
  while (p !== null) {
    temp = p.next;
    p.next = head;
    head = p;
    p = temp;
  }
  return head;
};
// @lc code=end

var reverseList = function (head) {
  if (head === null || head.next === null) return head;

  var newHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
};
