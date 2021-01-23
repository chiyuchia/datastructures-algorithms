/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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

var swapPairs = function (head) {
  if (head === null || head.next === null) return head;

  let res = new ListNode(null);
  res.next = head;
  let prev = res;
  while (prev.next && prev.next.next) {
    var fst = prev.next;
    var snd = prev.next.next;
    prev.next = snd;
    fst.next = snd.next;
    snd.next = fst;
    prev = fst;
  }
  return res.next;
};

// @lc code=end

var swapPairs = function (head) {
  if (head === null || head.next === null) return head;
  var p = head.next;
  var temp = p.next;
  var newHead = swapPairs(temp);
  head.next = newHead;
  p.next = head;
  return p;
};
