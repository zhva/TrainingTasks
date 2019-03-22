/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        arrayDuplicate.js
//---------------------------------------------------------------------------
function duplicate(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr.concat(arr);
  }
  return [];
}

//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printduplicateArray(id1, id2) {
  const userArray = readArray(id1);
  if (userArray.length < 0) {
    alert('An array is empty or an object is not defined!');
  }
  else {
    printArray(id2, duplicate(userArray));
  }
}
