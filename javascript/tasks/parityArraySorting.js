/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        parityArraySorting.js
//---------------------------------------------------------------------------
function sortArrayByParity(array) {
  if (!Array.isArray(array) || array.length <= 0) {
    return [];
  }

  const B = [];
  let j = 0;
  let k = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      B[j++] = array[i];
    }
    else {
      B[array.length - 1 - k++] = array[i];
    }
  }
  return B;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printSortedArrayByParity(id1, id2) {
  const arr = readArray(id1);
  if (arr === []) {
    alert('The array is invalid! Please, enter the correct value!');
  }
  else {
    printArray(id2, sortArrayByParity(arr));
  }
}
