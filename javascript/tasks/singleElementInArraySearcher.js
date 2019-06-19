/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        singleElementInArraySearcher.js
//---------------------------------------------------------------------------
function singleNumber(nums) {
  if (!Array.isArray(nums) || nums.length < 0) {
    return null;
  }
  const mapArr = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (mapArr.has(nums[i])) {
      mapArr.set(nums[i], mapArr.get(nums[i]) + 1);
    }
    else {
      mapArr.set(nums[i], 1);
    }
  }

  for (const [key, value] of mapArr.entries()) {
    if (value === 1) {
      return key;
    }
  }
  return null;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printsingleNumber(id1, id2) { // eslint-disable-line no-unused-vars
  const userArray = readArray(id1);
  if (userArray.length < 0) {
    alert('An array is empty or an object is not defined!');
  }
  else {
    printIntValue(id2, singleNumber(userArray));
  }
}
