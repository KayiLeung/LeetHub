/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    // console.log(node)
    return dfsPreOrder(node)
    
    
};

function dfsPreOrder(root, seen = new Map()) {
    if (!root) return
    if(seen.has(root)) return seen.get(root)
    
    const newRoot = new Node(root.val)
    seen.set(root, newRoot)
    for(let c of root.neighbors) {
        newRoot.neighbors.push(dfsPreOrder(c, seen))
    }
    
    return newRoot
}

