/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // if (head.val === 0) return []
    let reversed = new ListNode(null)
    let tail = reversed
    
    let values = []
    let current = head
    while (current !== null) {
        values.push(current.val)
        current = current.next
    }
    
    while (values.length) {
        tail.next = new ListNode(values.pop())
        tail = tail.next
    }
    
    return reversed.next
};