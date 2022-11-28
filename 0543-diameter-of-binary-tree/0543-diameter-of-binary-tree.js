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
var diameterOfBinaryTree = function(root) {
    let max = 0
    
    const findDepth = (root) => {
        if (!root) return 0
        const left = findDepth(root.left)
        const right = findDepth(root.right)
        max = Math.max(max, left + right)
        return Math.max(left, right) + 1
    }
    findDepth(root)
    return max
};