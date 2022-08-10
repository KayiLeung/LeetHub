/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const map = new WeakMap();
    
    while (head) {
        if (map.has(head)) {
            return head;
        }
        
        map.set(head, true);
        head = head.next;
    }
    
    return null;
};