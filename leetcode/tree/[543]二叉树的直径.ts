/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;
  if (!root) return result;
  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;
    const leftDepth = dfs(node.left);
    const rightDepth = dfs(node.right);
    result = Math.max(result, leftDepth + rightDepth + 1);
    return Math.max(leftDepth, rightDepth) + 1;
  };
  dfs(root);
  return result - 1;
}
// @lc code=end
