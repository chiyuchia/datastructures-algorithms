/*
 * @Author: Yoga
 * @Date: 2021-02-24 00:36:48
 * @LastEditors: 纪煜佳
 * @LastEditTime: 2021-03-03 22:42:37
 * @Description: 广度优先搜索
 */

const breadthFirstSearch = (head: ListNode | null, callback?: (node: ListNode) => void) => {
  if (!head) return;
  let curr = head;
  while (curr) {
    if (callback) callback(curr);
    curr = curr.next;
  }
};
