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

/*
    comparsion the first node in each lists, if the node is the smallest one, set that list as starter
    recursively compare two list until both or all one of the list become empty, add the rest of node to the sorted list
    return sorted list
*/
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return null
    if (!list1) return list2
    if (!list2) return list1
    
    if (list1.val < list2.val) {
        const next = list1.next
        list1.next = mergeTwoLists(next, list2)
        return list1
    } else {
        const next = list2.next
        list2.next = mergeTwoLists(list1, next)
        return list2
    }
};