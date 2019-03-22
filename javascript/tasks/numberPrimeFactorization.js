// require helper.js
// require primeNumberChecker.js
//---------------------------------------------------------------------------
//                        numberPrimeFactorisation.js
//---------------------------------------------------------------------------
function numberPrimeFactorization(num) {
  if (!Number.isInteger(num) || num < 2) {
    return [];
  }
  let number = num;
  const primeFactorsArray = [];

  while (number % 2 === 0) {
    primeFactorsArray.push(2);
    number /= 2;
  }
  for (let i = 3; i <= Math.floor(Math.sqrt(number)); i += 2) {
    while (number % i === 0) {
      if (primeNumberCheck_V1(i)) {
        primeFactorsArray.push(i);
      }
      number /= i;
    }
  }
  if (primeNumberCheck_V1(number)) {
    primeFactorsArray.push(number);
  }
  return primeFactorsArray;
}

//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printNumberPrimeFactorizationResult(id1, id2) {
  const userNumber = readNumberValue(id1);
  if (userNumber === -1) {
    alert('The number is invalid! Please, enter the correct number!');
  }
  else {
    printArray(id2, numberPrimeFactorization(userNumber));
  }
}
