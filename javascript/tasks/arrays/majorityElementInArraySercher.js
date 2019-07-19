/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        majorityElementInArraySercher.js
//---------------------------------------------------------------------------
function majorityElement(arr) {
  if (!Array.isArray(arr) || arr.length <= 0) {
    return null;
  }
  const mapArray = new Map();
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    const currentElement = arr[i];
    if (mapArray.has(currentElement)) {
      mapArray.set(currentElement, mapArray.get(currentElement) + 1);
    }
    else {
      mapArray.set(currentElement, 1);
    }
  }

  let majoritiElement = 0;
  for (const [key, value] of mapArray.entries()) {
    if (value > Math.floor(arrLength / 2)) {
      majoritiElement = key;
    }
  }
  return majoritiElement;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printMajorityElement(id1, id2) { // eslint-disable-line no-unused-vars
  const userArray = readArray(id1);
  if (userArray.length < 0) {
    alert('An array is empty or an object is not defined!');
  }
  else {
    printIntValue(id2, majorityElement(userArray));
  }
}
