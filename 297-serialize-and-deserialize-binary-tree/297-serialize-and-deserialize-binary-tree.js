/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return '';
    let stack = []
    const dfs = (node) => {
        if(!node) {
            stack.push('N')
            return 
        }
        stack.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return stack.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {

    if (!data.length) return null
    let fData = data.split(',')
    let idx = 0
    
    const dfs = () => {
        if (fData[idx] === 'N') {
            idx++
            return null
        }
        let node = new TreeNode(parseInt(fData[idx]))
        idx++
        node.left = dfs()
        node.right = dfs()
        return node
    }
    return dfs()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */