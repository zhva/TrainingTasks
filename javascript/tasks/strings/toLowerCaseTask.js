/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        toLowerCaseTask.js
//---------------------------------------------------------------------------
function toLowerCase(str) {
  if (str == null || str.length === 0) {
    return '';
  }
  let lowerCaseString = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      lowerCaseString += String.fromCharCode(str.charCodeAt(i) + 32);
    }
    else {
      lowerCaseString += str[i];
    }
  }
  return lowerCaseString;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function toLowerCasePrint(id1, id2) {
  const userStr = readStringValue(id1);
  if (userStr === '') {
    alert('Please, enter a string!');
  }
  else {
    printStringValue(id2, toLowerCase(userStr));
  }
}
