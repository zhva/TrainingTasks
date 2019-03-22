/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        nthFibonacciNumberCounter.js
//---------------------------------------------------------------------------
function nthFibonacciNumberCounter(number) {
  if (!Number.isInteger(number) || number < 0) {
    return 0;
  }

  let previousN = 0;
  let nthFibonacciN = 1;

  for (let i = 0; i < number; i++) {
    if ((Number.MAX_VALUE - previousN) <= nthFibonacciN) {
      return Infinity;
    }

    nthFibonacciN = previousN + nthFibonacciN;
    previousN = nthFibonacciN - previousN;
  }

  return previousN;
}

//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printNthFibonacciNumber(id1, id2) {
  const userNumber = readNumberValue(id1);
  if (userNumber === -1) {
    alert('The index is invalid! The index schoud be more than 0!');
  }
  else {
    printIntValue(id2, nthFibonacciNumberCounter(userNumber));
  }
}
