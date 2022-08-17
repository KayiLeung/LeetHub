/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return null
    let count = 1
    let tail = head
    while (tail.next) {
        count++
        tail = tail.next
    }
    tail.next = head
    let len = count - k % count
    if (len === 0) return head
    
    while(len > 0) {
        tail = tail.next
        len--
    }
    
    head = tail.next
    tail.next = null
    
    return head
    
};