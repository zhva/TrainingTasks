/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        stringReverse.js
//---------------------------------------------------------------------------
function reverseString(str) {
  if (str == null) {
    return '';
  }

  const arrayStrElem = str.split('');
  const strLength = arrayStrElem.length;

  for (let i = 0; i < strLength; i++) {
    arrayStrElem[i] = str.charAt(strLength - i - 1);
  }

  return arrayStrElem.join('');
}

//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printReversedStringResult(id1, id2) {
  const userStr = readStringValue(id1);
  if (userStr === '') {
    alert('Please, enter a string!');
  }
  else {
    printStringValue(id2, reverseString(userStr));
  }
}

