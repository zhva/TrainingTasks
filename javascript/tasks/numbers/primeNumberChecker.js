/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        primeNumberChecker.js
//---------------------------------------------------------------------------
// eslint-disable-next-line camelcase
function primeNumberCheck_V1(number) {
  if (!Number.isInteger(number) || number < 2) {
    return false;
  }
  const N = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= N; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// eslint-disable-next-line camelcase
function primeNumberCheck_V2(number) {
  if (!Number.isInteger(number) || number < 2) {
    return false;
  }

  const isPrimeArray = [];
  for (let i = 2; i <= number; i++) {
    isPrimeArray[i] = true;
  }

  for (let i = 2; i * i <= number; i++) {
    if (isPrimeArray[i]) {
      for (let j = i * i; j <= number; j += i) {
        isPrimeArray[j] = false;
      }
    }
  }

  return isPrimeArray[number];
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printPrimeNumberCheckResult(id1, id2) {
  const userNumber = readNumberValue(id1);
  if (userNumber === -1) {
    alert('The number is invalid! Please, enter the correct number!');
  }
  else {
    const resultValue = primeNumberCheck_V1(userNumber);
    if (resultValue === true) {
      printStringValue(id2, 'The number is prime!');
    }
    else {
      printStringValue(id2, 'The number isn\'t prime!');
    }
  }
}
