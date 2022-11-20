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
    if (!root) return []
    let res = []
    let stack = [[root, 0]]
    
    while (stack.length) {
        const [node, level] = stack.pop()
        if (res.length === level) res[level] = []
        res[level].push(node.val)
        if (node.right) stack.push([node.right, level + 1])
        if (node.left) stack.push([node.left, level + 1])
    }
    return res
};