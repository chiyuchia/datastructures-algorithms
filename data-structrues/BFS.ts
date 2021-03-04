/*
 * @Author: Yoga
 * @Date: 2021-02-24 00:36:48
 * @LastEditors: 纪煜佳
 * @LastEditTime: 2021-03-04 10:29:58
 * @Description: 广度优先搜索
 */

const breadthFirstSearch = (node: TreeNode | null, callback?: (node: TreeNode) => void) => {
  if (!node) return;
  const queue: TreeNode[] = [node];
  while (queue) {
    const node = queue.shift();
    if (callback) callback(node);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
};
