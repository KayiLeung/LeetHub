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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return []
    let stack = [[root, 0]]
    
    let res = []
    
    while (stack.length) {
       const [node, lvl] = stack.pop()
        res[lvl] = node.val
        
        if (node.right) stack.push([node.right, lvl + 1])
        if (node.left) stack.push([node.left, lvl + 1])
    }
    return res
}; 