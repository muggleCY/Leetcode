
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const quene = [root];
  const res = [];
  while (quene.length) {
    const p = []
    for (let i = quene.length; i > 0; i--) {
      //获取根节点，根节点出队
      const n = quene.shift();
      //将当前节点存入返回的数组
      p.push(n.val);
      //子节点依次入队
      n.left && quene.push(n.left);
      n.right && quene.push(n.right);

    }
    res.push(p);
  }
  return res
};