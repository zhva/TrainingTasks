/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//      greatestCommonDivisorCounter.js
//---------------------------------------------------------------------------
function greatestCommonDivisorCounter(firstN, secondN) {
  if (!Number.isInteger(firstN) || !Number.isInteger(secondN)) {
    return 0;
  }

  const firstNumber = Math.abs(firstN);
  const secondNumber = Math.abs(secondN);

  let greatestCommonDivisor = 0;
  const minNumber = Math.min(firstNumber, secondNumber);
  const maxNumber = Math.max(firstNumber, secondNumber);

  if (maxNumber % minNumber === 0) {
    return minNumber;
  }

  for (let i = 1; i <= minNumber; i++) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      greatestCommonDivisor = i;
    }
  }

  // while(secondNumber) {
  //   greatestCommonDivisor = secondNumber;
  //   secondNumber = firstNumber % secondNumber;
  //   firstNumber = greatestCommonDivisor;
  //   }

  return greatestCommonDivisor;
}

//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printGreatestCommonDivisorCounter(id1, id2, id3) {
  const firstUserNumber = readNumberValue(id1);
  const secondtUserNumber = readNumberValue(id2);

  if (firstUserNumber === -1 || secondtUserNumber === -1) {
    alert('The number is invalid! Please, enter the correct number!');
  }
  else {
    printIntValue(id3, greatestCommonDivisorCounter(firstUserNumber, secondtUserNumber));
  }
}
