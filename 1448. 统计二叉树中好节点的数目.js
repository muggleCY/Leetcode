/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let goodNodes = function (root) {
    const dfs = (root, path_max) => {
        if (root == null) {
            return 0
        }
        let res = 0
        if (root.val >= path_max) {
            res++
            path_max = root.val
        }
        res += dfs(root.left, path_max) + dfs(root.right, path_max)
        return res
    }
    return dfs(root, root.val)
};


// 作者：灵茶山艾府
// 链接：https://leetcode.cn/problems/count-good-nodes-in-binary-tree/solutions/2403677/jian-ji-xie-fa-pythonjavacgojs-by-endles-gwxt/
let goodNodes1 = function (root, mx = -Infinity) {
    if (root === null)
        return 0;
    const left = goodNodes1(root.left, Math.max(mx, root.val));
    const right = goodNodes1(root.right, Math.max(mx, root.val));
    return left + right + (mx <= root.val);
};

