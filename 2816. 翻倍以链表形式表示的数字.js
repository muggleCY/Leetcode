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
var doubleIt = function (head) {
    if (head.val > 4) {
        head = new ListNode(0, head)
    }
    for (let cur = head; cur; cur = cur.next) {
        cur.val = cur.val * 2 % 10
        if(cur.next &&cur.next.val > 4){
            cur.val++
        }
    }
    return head
};
var doubleIt1 = function (head) {
    let reverseList = (head) => {
        let pre = null
        let cur = head
        while (cur) {
            let next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        }
        return pre
    }
    let double = (l1) => {
        let dummy = new ListNode()
        let cur = dummy
        let carry = 0
        while (l1) {
            carry += l1.val * 2
            cur.next = new ListNode(carry % 10)
            carry = Math.floor(carry / 10)
            cur = cur.next
            l1 = l1.next
        }
        if(carry){
            cur.next = new ListNode(carry)
        }
        return dummy.next
    }
    head = reverseList(head)
    let res = double(head)
    return reverseList(res)
};
