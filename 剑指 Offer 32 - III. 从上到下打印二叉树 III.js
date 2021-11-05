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
    return []
  }
  const quene = [root];
  const res = [];
  const ids = 0;
  while (quene.length) {
    const p = []
    for (let i = quene.length; i > 0; i--) {
      const n = quene.shift();
      ids%2 == 0?p.push(n.val):p.unshift(n.val);
      n.left && quene.push(n.left)
      n.right && quene.push(n.right)
    }
    ids++;
    res.push(p);
  }
  return res
};