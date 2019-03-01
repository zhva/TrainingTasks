// require helper.js
// require primeNumberChecker.js
//---------------------------------------------------------------------------
//                        primeFactorsOfNumber.js
//---------------------------------------------------------------------------
function primeFactorsOfNumber(num) {
  if (!Number.isInteger(num) || num < 2) {
    return [];
  }

  const number = num;
  const primeFactorsArray = [];

  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      if (primeNumberCheck_V1(i)) {
        primeFactorsArray.push(i);
      }
    }
  }
  return primeFactorsArray;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printPrimeFactorsResult(id1, id2) {
  const userNumber = readNumberValue(id1);
  if (userNumber === -1) {
    alert('The number is invalid! Please, enter the correct number!');
  }
  else {
    printArray(id2, primeFactorsOfNumber(userNumber));
  }
}
