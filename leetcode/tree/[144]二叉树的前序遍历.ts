/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (!root) return result;
  const stack: TreeNode[] = [];
  let curNode = root;
  while (stack.length || curNode) {
    while (curNode) {
      result.push(curNode.val);
      stack.push(curNode);
      curNode = curNode.left;
    }
    curNode = stack.pop();
    curNode = curNode.right;
  }
  return result;
}
// @lc code=end
