//---------------------------------------------------------------------------
//                        helper.js
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
// Read Values
//---------------------------------------------------------------------------
function readNumberValue(crtlId) {
  const ctrl = document.getElementById(crtlId);
  if (ctrl == null) {
    return -1;
  }

  const numberN = parseInt(ctrl.value, 10);

  if (Number.isNaN(numberN) || numberN < 0 || !Number.isSafeInteger(numberN)) {
    return -1;
  }

  return numberN;
}
//---------------------------------------------------------------------------
function readStringValue(ctrlId) {
  const ctrl = document.getElementById(ctrlId);
  if (ctrl == null) {
    return '';
  }

  return ctrl.value;
}
//---------------------------------------------------------------------------
function readArray(ctrlId) {
  const ctrl = document.getElementById(ctrlId);
  if (ctrl == null) {
    return [];
  }

  const arr = ctrl.value.replace(/\s\s+/g, ' ').split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i], 10);
  }
  const intArray = arr.filter(n => !Number.isNaN(n));
  return arr;
}
//---------------------------------------------------------------------------
// Print Values
//---------------------------------------------------------------------------
function printStringValue(ctrlId, strValue) {
  const ctrl = document.getElementById(ctrlId);
  if (ctrl == null) {
    return;
  }
  ctrl.value = `"${strValue}"`;
}
//---------------------------------------------------------------------------
function printIntValue(ctrlId, intValue) {
  const ctrl = document.getElementById(ctrlId);
  if (ctrl == null) {
    return;
  }

  ctrl.value = intValue;
}
//---------------------------------------------------------------------------
function printArray(ctrlId, arr) {
  const ctrl = document.getElementById(ctrlId);
  if (ctrl == null) {
    return;
  }

  ctrl.value = arr.join(' ');
}
//---------------------------------------------------------------------------
function compareAsc(a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }

  return 0;
}
//---------------------------------------------------------------------------
/* Single Linked List node */

class SLLNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

function generateLinkedList(array, position) {
  if (!Array.isArray(array) || array.length < 1) {
    return null;
  }

  const head = new SLLNode(array[0], null);
  if (array.length === 1) {
    if (position === 0) {
      head.next = head;
    }
    return head;
  }

  let runner = head;
  let cycleNode = null;
  for (let i = 1; i < array.length; i++) {
    runner.next = new SLLNode(array[i], null);
    runner = runner.next;
    if (i === position) {
      cycleNode = runner;
    }
  }

  if (position === 0) {
    runner.next = head;
  }
  else {
    runner.next = cycleNode;
  }

  return head;
}
