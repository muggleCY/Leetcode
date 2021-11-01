/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  //树的广度优先遍历 层序遍历 先入先出

  if (!root) {
    return [];
  }
  //创建队列并把根节点入队
  const queue = [root];
  const res = [];
  while (queue.length) {
    //获取根节点，根节点出队
    const n = queue.shift();
    //将当前节点存入返回的数组
    res.push(n.val);
    //子节点依次入队
    n.left && queue.push(n.left);
    n.right && queue.push(n.right);
  }
  return res;
};