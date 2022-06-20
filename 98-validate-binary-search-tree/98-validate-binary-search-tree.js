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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (root === null) return true;
    
    return _isValidBST(root, -Infinity, Infinity)
};


var _isValidBST = (root, min, max) => {
    if (root === null) return true;
    
    if (root.val <= min  || root.val >= max) return false
    
    return _isValidBST(root.left, min, root.val) && _isValidBST(root.right, root.val, max)
}