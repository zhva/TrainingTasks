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
