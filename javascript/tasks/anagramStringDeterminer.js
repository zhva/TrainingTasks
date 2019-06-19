/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        anagramStringDeterminer.js
//---------------------------------------------------------------------------
function createFrequencyArray(str) {
  const frequencyArr = [];
  for (let i = 0; i < 26; i++) {
    frequencyArr[i] = 0;
  }

  const charCodeA = 'a'.charCodeAt(0);
  for (let i = 0; i < str.length; i++) {
    frequencyArr[str.charCodeAt(i) - charCodeA]++;
  }
  return frequencyArr;
}

function isAnagram(s, t) {
  if (s == null || t == null) {
    return '';
  }
  if (s.length !== t.length) {
    return false;
  }
  if (s === '' && t === '') {
    return true;
  }
  const frequencyS = createFrequencyArray(s);
  const frequencyT = createFrequencyArray(t);
  for (let i = 0; i < 26; i++) {
    if (frequencyS[i] !== frequencyT[i]) {
      return false;
    }
  }
  return true;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printFrequencyArray(id1, id2, id3) {
  const userStr1 = readStringValue(id1);
  const userStr2 = readStringValue(id2);
  if (userStr1 === '' || userStr2 === '') {
    alert('Please, enter a string!');
  }
  else {
    printStringValue(id3, isAnagram(userStr1, userStr2));
  }
}
