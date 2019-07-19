
/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        linkedListCycle.js
//---------------------------------------------------------------------------
function hasCycle(head) {
  // eslint-disable-next-line no-prototype-builtins
  if (head === null || head === undefined || !(head instanceof SLLNode)) {
    return false;
  }
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printHasCycle(id1, id2, id3) {
  const userArr = readArray(id1);
  const pos = readNumberValue(id2);

  const head = generateLinkedList(userArr, pos);

  if (userArr.length < 0) {
    alert('An array is empty or an object is not defined!');
  }
  else {
    printStringValue(id3, hasCycle(head));
  }
}
