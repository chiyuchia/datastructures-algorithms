/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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

function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (!root) return result;
  const stack: TreeNode[] = [];
  let curNode = root;
  let lastVisited;
  while (stack.length || curNode) {
    while (curNode) {
      stack.push(curNode);
      curNode = curNode.left;
    }
    const top = stack[stack.length - 1];
    if (!top.right || top.right === lastVisited) {
      const curNode = stack.pop();
      result.push(curNode.val);
      lastVisited = curNode;
    } else {
      curNode = top.right;
    }
  }
  return result;
}
// @lc code=end
