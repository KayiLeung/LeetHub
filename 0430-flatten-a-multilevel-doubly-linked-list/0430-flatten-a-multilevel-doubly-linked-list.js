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
    if (!head) return head
    let curr = head
    let tail = head
    let stack = []
    
    while (curr) {
        if (curr.child) {
            let child = curr.child
            if (curr.next) {
                stack.push(curr.next)
                curr.next.prev = null
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

