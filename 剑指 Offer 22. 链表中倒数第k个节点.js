/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
  let node = head,n = 0;
  while(node){
    node = node.next;
    n++;
  }
  for(let i=0;i<n-k;i++){
    head = head.next;
  }
  return head;
};