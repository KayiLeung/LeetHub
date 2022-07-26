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

    let queue = [{node: root, lvl:0}]
    
    while (queue.length > 0) {
        const {node, lvl} = queue.shift()
        if (res.length === lvl) {
            res[lvl] = [node.val]
        } else {
            res[lvl].push(node.val)
        }
        if (node.left) queue.push({node: node.left, lvl: lvl + 1})
        if (node.right) queue.push({node: node.right, lvl: lvl + 1})
    }
    return res
};

