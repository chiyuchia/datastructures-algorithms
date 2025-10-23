/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const buildTree = (nums: number[], left: number, right: number) => {
    if (right < left) {
      return null;
    }
    const midIndex = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[midIndex]);
    node.left = buildTree(nums, left, midIndex - 1);
    node.right = buildTree(nums, midIndex + 1, right);
    return node;
  };
  return buildTree(nums, 0, nums.length - 1);
}
// @lc code=end
