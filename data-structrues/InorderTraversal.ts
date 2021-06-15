/** 二叉树的中序遍历 - 迭代版 */
function iterativeInorderTraversal(root: TreeNode | null) {
  const result = [];
  const stack = [];
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
}

/** 二叉树的中序遍历 - 递归版 */
function recursiveInorderTraversal(root: TreeNode | null) {
  if (!root) return [];
  return [...recursiveInorderTraversal(root.left), root.val, ...recursiveInorderTraversal(root.right)];
}
