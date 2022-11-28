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
    let levels = []
    let stack = [{node:root, lvl:0}]
    
    while (stack.length > 0) {
        const {node, lvl} = stack.pop()
        if (levels.length === lvl) levels[lvl] = []
        levels[lvl].push(node.val)
        if (node.right) stack.push({node: node.right, lvl: lvl + 1})
        if (node.left) stack.push({node: node.left, lvl: lvl + 1})
        
    }
    return levels
    
};