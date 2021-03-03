/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let lengthA = 0;
  let lengthB = 0;
  let currA = headA;
  let currB = currB;
  while (currA) {
    lengthA += 1;
    currA = currA.next;
  }
  currA = headA;
  while (currB) {
    lengthB += 1;
    currB = currB.next;
  }
  currB = headB;
  const gap = lengthA - lengthB;
  if (gap > 0) for (let i = 0; i < gap; i++) currA = currA.next;
  else for (let i = 0; i < -gap; i++) currB = currB.next;
  while (currA) {
    if (currA === currB) return currA;
    currA = currA.next;
    currB = currB.next;
  }
  return null;
};
