/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                          disapeardNumbersInArray.js
//---------------------------------------------------------------------------
function findDisappearedNumbers(array) {
  if (!Array.isArray(array) || array.length <= 0) {
    return [];
  }
  const missing = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    const index = Math.abs(arr[i]) - 1;
    if (arr[index] > 0) {
      arr[index] = -arr[index];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      missing.push(i + 1);
    }
  }
  return missing;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printDisappearedNumbers(id1, id2) {
  const userArray = readArray(id1);
  if (userArray.length < 0) {
    alert('An array is empty or an object is not defined!');
  }
  else {
    printArray(id2, findDisappearedNumbers(userArray));
  }
}
