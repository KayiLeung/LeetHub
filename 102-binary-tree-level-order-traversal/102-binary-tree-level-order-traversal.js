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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    const dfs = (node, lvl) => {
        if (node === null) return
        
        if (!res[lvl]) res[lvl] = []
        
        res[lvl].push(node.val)
        dfs(node.left, lvl + 1)
        dfs(node.right, lvl + 1)
    
    }
    dfs(root, 0)
    return res
};

