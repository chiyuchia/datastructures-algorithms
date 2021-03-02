/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  const ans: number[][] = [];
  if (!root) return ans;
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const currentLevelLength = queue.length;
    const index = ans.length;
    ans.push([]);
    for (let i = 0; i < currentLevelLength; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      if (index % 2 === 0) ans[index].push(node.val);
      else ans[index].unshift(node.val);
    }
  }
  return ans;
}
