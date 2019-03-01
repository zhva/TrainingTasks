// require helper.js
//---------------------------------------------------------------------------
//                        uniqueStringCharactersCheck.js
//---------------------------------------------------------------------------
function isStringConsistOfUniqueCharacters(userString) {
  if (userString == null) {
    return false;
  }

  if (userString === '') {
    return true;
  }

  const sortedArray = userString.split('').sort();

  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      return false;
    }
  }
  return true;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printUniqueCharactersResult(id1, id2) {
  const userStr = readStringValue(id1);
  if (userStr === '') {
    alert('Please, enter a string!');
  }
  if (isStringConsistOfUniqueCharacters(userStr)) {
    printStringValue(id2, 'The string has all unique characters!');
  }
  else {
    printStringValue(id2, 'The string has repeating characters!');
  }
}
