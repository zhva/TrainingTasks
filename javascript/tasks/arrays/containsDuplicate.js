/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                          containsDuplicate.js
//---------------------------------------------------------------------------
// eslint-disable-next-line camelcase
function containsDuplicate_V1(nums) {
  if (!Array.isArray(nums) || nums.length <= 0) {
    return [];
  }
  const setArr = new Set(nums);
  return (setArr.size !== nums.length);
}

// eslint-disable-next-line camelcase
function containsDuplicate_V2(nums) {
  if (!Array.isArray(nums) || nums.length <= 0) {
    return [];
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
    if (value > 1) {
      return true;
    }
  }

  return false;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printContainsDuplicate(id1, id2) {
  const userArray = readArray(id1);
  if (userArray.length < 0) {
    alert('An array is empty or an object is not defined!');
  }
  else {
    printStringValue(id2, containsDuplicate_V1(userArray));
  }
}