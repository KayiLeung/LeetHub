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
    //dfs appoarch
    //consider child node as left branch and next node as right branch
    //iterate through the whole doubly list
    //assign two variable, tail and curr, when tail shown the end of the passed node, and curr is the current node, and they are start at head
    //if curr.next does exist, passed node become tail and curr become curr.next
    //if curr.child does exist, push the curr.next into the stack, set curr.next.prev as null
    //curr.child node become curr.next, reset curr.next and child.prev
    //if curr.next and curr.child not exist, pop out node from stack as curr node and look for curr.next
    //return head while stack is empty
    let stack = []
    let curr = head, tail = head
    
    while (curr) {
        if (curr.child) {
            if (curr.next) {
                const next = curr.next
                next.prev = null
                stack.push(next)   
            }
            
            
            const child = curr.child
            child.prev = curr
            curr.next = child
            curr.child = null
        }
        tail = curr
        curr = curr.next
    }   
    //tail -> 12 -> 9 -> 10 -> 4 ...
    //curr -> null -> 9 -> 10 -> null -> 4
    while (stack.length) {
        curr = stack.pop()  // 4
        tail.next = curr
        curr.prev = tail
        while (curr) {
            tail = curr
            curr = curr.next
        }
    }
    
    return head
    
};