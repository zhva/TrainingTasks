/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        bigNumbersMultiplier.js
//---------------------------------------------------------------------------
function additionOfTwoBigNumbers(arrayForNumber1, arrayForNumber2) {
  const resultArr = [];
  let temp = 0;
  const maxLength = arrayForNumber1.length - arrayForNumber2.length;
  if (maxLength > 0) {
    for (let i = 0; i < Math.abs(maxLength); i++) {
      arrayForNumber2.unshift(0);
    }
  }
  else if (maxLength < 0) {
    for (let i = 0; i < Math.abs(maxLength); i++) {
      arrayForNumber1.unshift(0);
    }
  }
  for (let i = arrayForNumber1.length - 1; i >= 0; i--) {
    const summ = arrayForNumber1[i] + arrayForNumber2[i];
    if (summ > 9) {
      resultArr[i] = (temp + summ) % 10;
      temp = Math.floor(summ / 10);
      if (i === 0) {
        resultArr.unshift(temp);
      }
    }
    else if (temp + summ > 9) {
      resultArr[i] = (temp + summ) % 10;
      temp = Math.floor((temp + summ) / 10);
      if (i === 0) {
        resultArr.unshift(temp);
      }
    }
    else {
      resultArr[i] = temp + summ;
      temp = 0;
    }
  }
  return resultArr;
}
//---------------------------------------------------------------------------
function multiplyByDidgit(numberArr, didgit, shiftForTens = 0) {
  const multiplicationResultArr = [];
  let temp = 0;
  for (let i = numberArr.length - 1; i >= 0; i--) {
    const multipl = numberArr[i] * didgit;
    if (Math.floor(multipl / 10) !== 0) {
      multiplicationResultArr[i] = (temp + multipl) % 10;
      temp = Math.floor((temp + multipl) / 10);
      if (i === 0) {
        multiplicationResultArr.unshift(temp);
      }
    }
    else if (temp + multipl > 9) {
      multiplicationResultArr[i] = (temp + multipl) % 10;
      temp = Math.floor((temp + multipl) / 10);
      if (i === 0) {
        multiplicationResultArr.unshift(temp);
      }
    }
    else {
      multiplicationResultArr[i] = temp + multipl;
      temp = 0;
    }
  }
  for (let i = 0; i < shiftForTens; i++) {
    multiplicationResultArr.push(0);
  }
  return multiplicationResultArr;
}
//---------------------------------------------------------------------------
function bigNumbersMultipier(num1, num2) {
  if (num1 === null || num2 === null || num1 === undefined || num2 === undefined) {
    return '';
  }
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  let resultArray = [];
  for (let i = num2.length - 1; i >= 0; i--) {
    const tempArr = multiplyByDidgit(num1, num2[i], num2.length - 1 - i);
    resultArray = additionOfTwoBigNumbers(resultArray, tempArr);
  }

  return resultArray.join('');
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function bigNumbersMultipierResult(id1, id2, id3) {
  const userStr1 = readStringValue(id1);
  const userStr2 = readStringValue(id2);
  if (userStr1 === '' || userStr2 === '') {
    alert('Please, enter the number!');
  }
  else {
    printStringValue(id3, bigNumbersMultipier(userStr1, userStr2));
  }
}
