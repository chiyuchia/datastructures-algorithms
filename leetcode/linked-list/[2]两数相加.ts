/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let isAdd = false;
  let result = null;
  let curNode = null;
  while (l1?.val !== undefined || l2?.val !== undefined || isAdd) {
    if (!curNode) {
      result = new ListNode();
      curNode = result;
    } else {
      curNode.next = new ListNode();
      curNode = curNode.next;
    }
    const l1Val = l1?.val ?? 0;
    const l2Val = l2?.val ?? 0;
    const addOne = isAdd ? 1 : 0;
    const sum = l1Val + l2Val + addOne;
    curNode.val = sum % 10;
    isAdd = sum / 10 >= 1;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return result;
}
// @lc code=end
