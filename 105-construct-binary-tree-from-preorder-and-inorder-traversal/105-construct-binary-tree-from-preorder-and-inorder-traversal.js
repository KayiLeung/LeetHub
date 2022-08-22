/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null
    const root = preorder[0]
    let rootNode = new TreeNode(root)
    const rootIndex = inorder.indexOf(root)

    const leftPreorder = preorder.splice(0, rootIndex + 1)
    leftPreorder.shift()
    
    const leftInorder = inorder.splice(0, rootIndex + 1)
    leftInorder.pop()
    
    const leftPath = buildTree(leftPreorder, leftInorder)

    const rightPath = buildTree(preorder, inorder)

    rootNode.left = leftPath
    rootNode.right = rightPath
    return rootNode
};