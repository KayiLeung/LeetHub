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
var middleNode = function(head) {
    if (head === null) return 0
    
    let count = 0
    let current = head
    let midNode = head
    
    while (current) {
        count += 1
        current = current.next
    }
    
    
    let mid = count % 2 === 0 ? count / 2  : Math.floor(count /2)
    
    while (mid > 0) {
        midNode = midNode.next
        
        mid--
        
    }
    return midNode
};