/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        thirdMaximumNumber.js
//---------------------------------------------------------------------------
function findThirdMaxNumber(array) {
  if (!Array.isArray(array) || array.length <= 0) {
    return [];
  }
  let firstMaxNumber = Number.MIN_SAFE_INTEGER;
  let secondMaxNumber = firstMaxNumber;
  let thirdMaxNumber = secondMaxNumber;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > firstMaxNumber) {
      thirdMaxNumber = secondMaxNumber;
      secondMaxNumber = firstMaxNumber;
      firstMaxNumber = array[i];
    }
    else if (array[i] === firstMaxNumber) {
      continue;
    }
    else if (array[i] > secondMaxNumber) {
      thirdMaxNumber = secondMaxNumber;
      secondMaxNumber = array[i];
    }
    else if (array[i] === secondMaxNumber) {
      continue;
    }
    else if (array[i] > thirdMaxNumber) {
      thirdMaxNumber = array[i];
    }
  }
  if (thirdMaxNumber === Number.MIN_SAFE_INTEGER) {
    return firstMaxNumber;
  }
  return thirdMaxNumber;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printThirdMaxNumber(inputId, outputId) {
  const array = readArray(inputId);
  if (array.length < 0) {
    alert('An array is empty or an object is not defined!');
  }
  else {
    printIntValue(outputId, findThirdMaxNumber(array));
  }
}
