// require helper.js
// require primeNumberChecker.js
//---------------------------------------------------------------------------
//                        primeNumberCounter.js
//---------------------------------------------------------------------------
function primeNumbersCounter_V1(number) {
  if (!Number.isInteger(number) || number < 2) {
    return -1;
  }

  let primeFactorsCount = 0;

  for (let i = 2; i < number; i++) {
    if (primeNumberCheck_V1(i)) {
      primeFactorsCount++;
    }
  }
  return primeFactorsCount;
}

function primeNumbersCounter_V2(number) {
  if (!Number.isInteger(number) || number < 2) {
    return -1;
  }

  let primeNumbersCount = 0;
  const isPrimeArray = [];

  for (let i = 2; i < number; i++) {
    isPrimeArray[i] = true;
  }

  for (let i = 2; i * i < number; i++) {
    if (isPrimeArray[i]) {
      for (let j = i * i; j < number; j += i) {
        isPrimeArray[j] = false;
      }
    }
  }

  for (let i = 2; i < number; i++) {
    if (isPrimeArray[i]) {
      primeNumbersCount++;
    }
  }

  return primeNumbersCount;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printPrimeNumbersCounter(id1, id2) {
  const userNumber = readNumberValue(id1);
  if (userNumber === -1) {
    alert('The number is invalid! Please, enter the correct number!');
  }
  else {
    printIntValue(id2, primeNumbersCounter_V1(userNumber));
  }
}
