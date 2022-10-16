/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    //dfs
    //assign stack as array
    //assign variable tail as pointer
    //literate doubly link list from head to curr
    //look for node with child, then change next pointer to child node
    //disconnect next node prev pointer and push it in stack
    //while node next and prev all null return and look the rest of node in stack
    //pop out stack and repeat 
    //return head while tail next and tail prev && stack is emtpy
    
    let stack = []
    let curr = head
    let tail = head
    
    while (curr) {
        if (curr.child) {
            const child = curr.child
            if (curr.next) {
                const next = curr.next
                next.prev = null
                stack.push(next)
            }
            curr.next = child
            child.prev = curr
            curr.child = null
        }
        tail = curr
        curr = curr.next
    }
    while (stack.length) {
        curr = stack.pop()
        tail.next = curr
        curr.prev = tail
        while (curr) {
            tail = curr
            curr = curr.next
        }
    }
    
    return head
};