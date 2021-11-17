/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  let phead = new ListNode();
  let cur = phead ,cur1 = l1,cur2 = l2;
  while(cur1&&cur2){
    if(cur1.val <= cur2.val){
      cur.next = cur1;
      cur = cur1;
      cur1 = cur1.next;
    }else{
      cur.next = cur2;
      cur = cur2;
      cur2 = cur2.next
    }
  }
    if(cur1){
      cur.next = cur1
    }else if(cur2) {
      cur.next = cur2;
  }
  return phead.next
};