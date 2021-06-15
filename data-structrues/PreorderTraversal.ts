/** 前序遍历 - 迭代版 */
function iterativePreorderTraversal(root: TreeNode | null) {
  const result = [];
  const stack = [];
  while (root || stack.length) {
    while (root) {
      result.push(root.val);
      stack.push(root);
      root = root.left;
    }
    root = stack.pop().right;
  }
  return result;
}

/** 谦虚遍历 - 递归版 */
function recursivePreorderTraversal(root: TreeNode | null) {
  if (!root) return [];
  return [root.val, ...recursivePreorderTraversal(root.left), ...recursivePreorderTraversal(root.right)];
}
