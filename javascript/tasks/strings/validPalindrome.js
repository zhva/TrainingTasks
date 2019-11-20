/* requires:
    helper.js
    palindromeDeterminer.js
*/
//---------------------------------------------------------------------------
//                        palindromeDeterminerII.js
//---------------------------------------------------------------------------
function validPalindrome(str) {
  if (str == null || str === undefined || str === '') {
    return '';
  }

  function cutOnPosition(s, index) {
    return s.substring(0, index) + s.substring(index + 1, str.length);
  }

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return isPalindrome(cutOnPosition(str, i)) || isPalindrome(cutOnPosition(str, str.length - 1 - i));
    }
  }
  return true;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printValidPalindrome(iputObjId, outputObjId) {
  const str = readStringValue(iputObjId);

  if (str === '') {
    alert('The string is invalid! Please, enter the correct string!');
  }
  else {
    printStringValue(outputObjId, validPalindrome(str));
  }
}