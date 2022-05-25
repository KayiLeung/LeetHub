/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const head = new ListNode(null)
    let tail = head
    let current1 = list1
    let current2 = list2
    
    while (current1 !== null && current2 !== null) {
        let val1 = current1.val
        let val2 = current2.val
        if (val1 <= val2) {
            tail.next = current1
            current1 = current1.next
            tail = tail.next
        } else {
            tail.next = current2
            current2 = current2.next
            tail = tail.next
        }
    }
    
    if (current1 === null) tail.next = current2
    if (current2 === null) tail.next = current1
    
    return head.next
};