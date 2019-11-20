/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        palindromeDeterminer.js
//---------------------------------------------------------------------------
function isPalindrome(str) {
  if (str == null || str === undefined || str === '') {
    return '';
  }

  const clearString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  for (let i = 0; i < clearString.length / 2; i++) {
    if (clearString[i] !== clearString[clearString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printIsPalindrome(iputObjId, outputObjId) {
  const str = readStringValue(iputObjId);

  if (str === '') {
    alert('The string is invalid! Please, enter the correct string!');
  }
  else {
    printStringValue(outputObjId, isPalindrome(str));
  }
}