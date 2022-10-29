/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? " " : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {Node}
 */
var expTree = function(s) {
    let tree = []
    let prefix = goPrefix(s)

    for (const curr of prefix) {
        if (!isNaN(curr)) {
            tree.push(new Node(curr))
        } else {
            const right = tree.pop()
            const left = tree.pop()
            tree.push(new Node(curr, left, right))
        }
    }
    return tree[0]
};

const goPrefix = (s) => {
    let prefix = [], operator = []
    const priority = {
        '+' : 1,
        '-' : 1, 
        '*' : 2,
        '/' : 2
    }
    for (const char of s) {
        if (!isNaN(char)) {
            prefix.push(char)
        } else if (char === '(') {
            operator.push(char)
        } else if (char === ')') {
            while (operator.at(-1) !== '(') {
                prefix.push(operator.pop())
            }
            operator.pop()
        } else {
            while(operator.length > 0 && priority[char] <= priority[operator.at(-1)]) {
                prefix.push(operator.pop())
            }
            operator.push(char)
        }
    }
    return prefix.concat(operator.reverse())
}