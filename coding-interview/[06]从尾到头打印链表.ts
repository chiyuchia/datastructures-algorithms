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

/** 递归法 */
function reversePrint_1(head: ListNode | null): number[] {
  const ans = [];
  if (!head) return ans;
  const recursion = (node: ListNode | null) => {
    if (node.next) recursion(node.next);
    ans.push(node.val);
  };
  recursion(head);
  return ans;
}

/** 辅助栈法 */
function reversePrint_2(head: ListNode | null): number[] {
  const ans: number[] = [];
  if (!head) return ans;
  const nodeStack: ListNode[] = [];
  let currentNode = head;
  while (currentNode) {
    nodeStack.push(currentNode);
    currentNode = currentNode.next;
  }
  while (nodeStack.length) ans.push(nodeStack.pop().val);
  return ans;
}
