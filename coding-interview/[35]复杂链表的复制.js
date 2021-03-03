/**
 * Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
const visited = new Map();
var copyRandomList = function (head) {
  if (!head) return null;
  if (visited.has(head)) return visited.get(head);
  const newHead = new Node(head.val, null, null);
  visited.set(head, newHead);
  newHead.next = copyRandomList(head.next);
  newHead.random = copyRandomList(head.random);
  return visited.get(head);
};
