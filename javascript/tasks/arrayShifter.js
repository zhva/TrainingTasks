/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                          arrayShifter.js
//---------------------------------------------------------------------------
// eslint-disable-next-line camelcase
function arrayShift_V1(arr, m) {
  if (!Array.isArray(arr) || arr.length <= 0 || !Number.isSafeInteger(m)) {
    return [];
  }
  const array = arr;
  const n = array.length;
  let k = m % n;
  if (k < 0) {
    k = n + k;
  }

  if (k === n / 2) {
    for (let i = 0; i < k; i++) {
      const temp = array[i + k];
      array[i + k] = array[i];
      array[i] = temp;
    }
  }
  else {
    let from = 0;
    let to = k;
    let tempTo = array[to];
    let tempFrom = array[from];

    for (let i = 0; i < n; i++) {
      array[to] = tempFrom;
      from = to;
      to = (from + k) % n;
      tempFrom = tempTo;
      tempTo = array[to];
    }
  }
  return array;
}

// eslint-disable-next-line camelcase
function arrayShift_V2(arr, k) {
  if (!Array.isArray(arr) || arr.length <= 0 || !Number.isSafeInteger(k)) {
    return [];
  }
  let m = k;
  const array = arr;
  let lastElement = 0;
  const n = array.length;
  if (k < 0) {
    m = n + k;
  }
  for (let i = 0; i < m; i++) {
    lastElement = array.pop();
    array.unshift(lastElement);
  }
  return array;
}

//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printShiftedArray(id1, id2, id3) {
  const userArray = readArray(id1);
  const shift = readNumberValue(id2);
  if (userArray.length < 0) {
    alert('An array is empty or an object is not defined!');
  }
  else if (shift === -1) {
    alert('The number is invalid! Please, enter the correct number!');
  }
  else {
    printArray(id3, arrayShift_V1(userArray, shift));
  }
}
