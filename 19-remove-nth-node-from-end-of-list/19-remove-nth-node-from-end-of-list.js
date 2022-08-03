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
    if (head.next === null && n > 0) return null
    
    let current = head
    let prev = head
    let index = 0
    while (current) {
        current = current.next
        index++
    }
    
    current = head
    
    if (n - index === 0)  return head.next
    
    while (n < index && current) {
        prev = current
        current = current.next
        n++
    }
    
    if (!current) return null
    prev.next = current.next
    return head
};