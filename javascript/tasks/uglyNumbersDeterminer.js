/* requires:
    helper.js
    primeNumberChecker.js
*/
//---------------------------------------------------------------------------
//                        uglyNumbersDeterminer.js
//---------------------------------------------------------------------------
// eslint-disable-next-line camelcase
function isNumberUgly_V1(number) {
  if (number <= 0 || number > Number.MAX_SAFE_INTEGER || !Number.isSafeInteger(number)) {
    return false;
  }

  if (number === 1) {
    return true;
  }

  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      if (primeNumberCheck_V1(i)) {
        if (i >= 7) {
          return false;
        }
      }
    }
  }
  return true;
}

// eslint-disable-next-line camelcase
function isNumberUgly_V2(num) {
  if (num <= 0 || num > Number.MAX_SAFE_INTEGER || !Number.isSafeInteger(num)) {
    return false;
  }

  let number = num;
  if (number === 1) {
    return true;
  }

  while (number !== 1) {
    if (number % 2 === 0) {
      number /= 2;
    }
    else if (number % 3 === 0) {
      number /= 3;
    }
    else if (number % 5 === 0) {
      number /= 5;
    }
    else {
      return false;
    }
  }

  return true;
}
// function isNumberUgly_V3(number) {
//     if(number <= 0 || number > Number.MAX_SAFE_INTEGER || !Number.isSafeInteger(number))
//         return false; ///????????

//     if(number == 1)
//         return true;

//     var isUgly = false;
//     if(number % 2 != 0 && number % 3 != 0 && number % 5 != 0)
//         return false;
//     else {
//         for(var i = 2; i <= number; i++){
//             if(number % i == 0){
//                 if(i < 6)
//                     isUgly = true;
//                 else
//                     break;
//             }
//         }
//     }
//     return isUgly;
// }
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printisNumberUglyResult(id1, id2) {
  const userNumber = readNumberValue(id1);
  if (userNumber === -1) {
    alert('The number is invalid! Please, enter the correct number!');
  }
  else {
    const resultValue = isNumberUgly_V2(userNumber);
    if (resultValue) {
      printStringValue(id2, 'The number is ugly number!');
    }
    else {
      printStringValue(id2, "The number isn't ugly number!");
    }
  }
}
