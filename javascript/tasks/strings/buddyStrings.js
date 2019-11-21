/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        buddyStrings.js
//---------------------------------------------------------------------------
function isBuddyStrings(strA, strB) {
  if (strA == null || strA === undefined || strA === '' || strB == null || strB === undefined || strB === '') {
    return '';
  }
  if (strA.length !== strB.length || strA.length < 2 || strB.length < 2) {
    return false;
  }

  if (strA === strB) {
    const setA = new Set(strA.split(''));
    return setA.size < strA.length;
  }

  const indexes = [];
  for (let i = 0; i < strA.length; i++) {
    if (strA[i] !== strB[i]) {
      indexes.push(i);
    }
  }
  if (indexes.length !== 2) {
    return false;
  }

  return strA[indexes[0]] === strB[indexes[1]] && strA[indexes[1]] === strB[indexes[0]];
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printBuddyStrings(inputObjId1, inputObjId2, outputObjId) {
  const str1 = readStringValue(inputObjId1);
  const str2 = readStringValue(inputObjId2);

  if (str1 === '' || str2 === '') {
    alert('The string is invalid! Please, enter the correct string!');
  }
  else {
    printStringValue(outputObjId, isBuddyStrings(str1, str2));
  }
}
