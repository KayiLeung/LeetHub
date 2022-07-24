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
  let queue = [{node: root, levelNum: 0}]
  
  while (queue.length > 0) {
    const {node, levelNum} = queue.shift();
    
    if (res.length === levelNum) {
      res[levelNum] = [node.val]
    } else {
      res[levelNum].push(node.val)
    }
    
    if (node.left) queue.push({node: node.left, levelNum: levelNum + 1})
    if (node.right) queue.push({node: node.right, levelNum: levelNum + 1})
  }
  return res
};

