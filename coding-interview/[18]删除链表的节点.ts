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

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let currentNode = dummy;
  while (currentNode.next.val !== val) currentNode = currentNode.next;
  currentNode.next = currentNode.next.next;
  return dummy.next;
}
