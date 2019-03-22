/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        twoSortedArraysMerge.js
//---------------------------------------------------------------------------
function mergeSortedArrays(array1, array2) {
  if (!Array.isArray(array1) && !Array.isArray(array2)) {
    return [];
  }
  if (!Array.isArray(array1) || array1.length <= 0) {
    return array2;
  }
  if (!Array.isArray(array2) || array2.length <= 0) {
    return array1;
  }

  // if(!sorted)
  const userArray1 = array1.sort();
  const userArray2 = array2.sort();
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < userArray1.length; i++) {
    if (userArray1[i] != null && typeof userArray1[i] === 'number') {
      arr1.push(userArray1[i]);
    }
  }

  for (let i = 0; i < userArray2.length; i++) {
    if (userArray2[i] != null && typeof userArray2[i] === 'number') {
      arr2.push(userArray2[i]);
    }
  }

  let i = 0;
  while (i < arr1.length && arr2.length > 0) {
    const next = arr2[0];
    if (next <= arr1[0]) {
      arr1.splice(0, 0, next);
      arr2.splice(0, 1);
    }
    else if (arr1[arr1.length - 1] <= next) {
      arr1.splice(arr1.length, 0, next);
      arr2.splice(0, 1);
    }
    else if (next >= arr1[i] && next <= arr1[i + 1]) {
      arr1.splice(i + 1, 0, next);
      arr2.splice(0, 1);
    }
    else {
      i++;
    }
  }

  return arr1;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printMergedArray(id1, id2, id3) {
  const userArray1 = readArray(id1);
  const userArray2 = readArray(id2);
  if (userArray1.length <= 0 || userArray2 <= 0) {
    alert('An array is empty or an object is not defined!');
  }
  else {
    printArray(id3, mergeSortedArrays(userArray1, userArray2));
  }
}
