// require helper.js
//---------------------------------------------------------------------------
//                        totalZerosCounter.js
//---------------------------------------------------------------------------
function countZeros(num) {
  if (!Number.isInteger(num) || num < 1 || !Number.isSafeInteger(num)) {
    return -1;
  }

  let numberN = num;
  let countOfZeros = 0;

  while (numberN > 0) {
    if (numberN % 10 === 0) {
      countOfZeros++;
    }
    numberN = Math.floor(numberN /= 10);
  }
  return countOfZeros;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printZerosCountResult(id1, id2) {
  const userNum = readNumberValue(id1);
  if (userNum === -1) {
    alert('The number is invalid! Please, enter the correct number!');
  }
  else {
    printIntValue(id2, countZeros(userNum));
  }
}
