/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        powerOfThreeDeterminer.js
//---------------------------------------------------------------------------
function isPowerOfThree(num) {
  if (num < 1 || num > Number.MAX_SAFE_INTEGER || !Number.isInteger(num)) {
    return false;
  }

  let number = num;
  while (number % 3 === 0) {
    number /= 3;
  }

  if (number === 1) {
    return true;
  }

  return false;
}

//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printPowerOfThreeresult(id1, id2) {
  const userNumber = readNumberValue(id1);
  if (userNumber === -1) {
    alert('The number is invalid! Please, enter the correct number!');
  }
  else {
    const resultValue = isPowerOfThree(userNumber);
    if (resultValue === true) {
      printStringValue(id2, 'The number is power of three!');
    }
    else {
      printStringValue(id2, "The number isn't power of three!");
    }
  }
}
