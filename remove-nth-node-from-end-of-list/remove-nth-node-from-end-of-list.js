/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head.next && n > 0) return null
    
    let curr = head
    let len = 0
    while(curr) {
        curr = curr.next
        len++
    }
    
    if (len - n === 0) return head.next
    curr = head
    let prev = curr
    while (n < len && curr) {
        prev = curr
        curr = curr.next
        n++
    }
    
    if (!curr) return null
    prev.next = curr.next
    return head
    
};