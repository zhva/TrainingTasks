/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        missingNumberSercher.js
//---------------------------------------------------------------------------
function missingNumber(nums) {
  if (!Array.isArray(nums) || nums.length <= 0) {
    return [];
  }
  const sum0toN = nums.length * (nums.length + 1) / 2;
  let sumArr = 0;

  for (let i = 0; i < nums.length; i++) {
    sumArr += nums[i];
  }

  return sum0toN - sumArr;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printMissingNumber(id1, id2) {
  const userArr = readArray(id1);
  if (userArr.length < 0) {
    alert('An array is empty or an object is not defined!');
  }
  else {
    printIntValue(id2, missingNumber(userArr));
  }
}
