/** 二叉树的后序遍历 - 迭代版 */
function iterativePostorderTraversal(root: TreeNode | null) {
  const result = [];
  const stack = [];
  let prev: TreeNode | null = null;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.right && root.right !== prev) {
      stack.push(root);
      root = root.right;
    } else {
      prev = root;
      result.push(root.val);
      root = null;
    }
  }
  return result;
}

/** 二叉树的后序遍历 - 递归版 */
function recursivePostorderTraversal(root: TreeNode | null) {
  if (!root) return [];
  return [...recursivePostorderTraversal(root.left), ...recursivePostorderTraversal(root.right), root.val];
}
