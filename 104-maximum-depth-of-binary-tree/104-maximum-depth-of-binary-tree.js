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
    if (root === null) return 0
    
    let max = 0
    
    maxDepth(root, max)
    
    return max
    
};

var maxDepth = (root, max) => {
    if (root === null) return 0
    
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    
    return Math.max(left, right) + 1
}