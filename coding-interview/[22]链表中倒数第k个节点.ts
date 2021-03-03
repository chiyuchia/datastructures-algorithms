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

/**
 * @description: Map 解法
 * @param {ListNode | null} head
 * @param {number} k
 * @return {ListNode | null}
 */
function getKthFromEnd_1(head: ListNode | null, k: number): ListNode | null {
  const hashMap: { [x: number]: ListNode } = {};
  let currentNode = head;
  let index = 0;
  while (currentNode !== null) {
    hashMap[index] = currentNode;
    index++;
    currentNode = currentNode.next;
  }
  return hashMap[index - k] || null;
}

/**
 * @description: 双指针解法
 * @param {ListNode | null} head
 * @param {number} k
 * @return {ListNode | null}
 */
function getKthFromEnd_2(head: ListNode | null, k: number): ListNode | null {
  let fast = head;
  let slow = head;
  for (let i = 0; i < k; i++) fast = fast.next;
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}
