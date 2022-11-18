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
var maxDepth = function(root) {
    if (!root) return 0
    let stack = [[root, 1]]
    let max = 0
    while (stack.length) {
        const [node, level] = stack.pop()
        max = Math.max(max, level)
        if (node.left) stack.push([node.left, level + 1])
        if (node.right) stack.push([node.right, level + 1])
    }
    return max
};