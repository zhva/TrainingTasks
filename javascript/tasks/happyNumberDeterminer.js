/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//     happyNumberDeterminer.js
//---------------------------------------------------------------------------
// eslint-disable-next-line camelcase
function isHappyNumber_V1(num) {
  if (num < 1 || !Number.isInteger(num)) {
    return false;
  }
  let number = num;
  let happyN = number;
  while (happyN >= 10) {
    const strNumber = `${number}`;
    happyN = 0;
    for (let i = 0; i < strNumber.length; i++) {
      happyN += strNumber[i] * strNumber[i];
    }
    number = happyN;
  }

  if (happyN === 1 || happyN === 7) {
    return true;
  }

  return false;
}

// eslint-disable-next-line camelcase
function isHappyNumber_V2(num) {
  if (num < 1 || !Number.isInteger(num)) {
    return false;
  }
  let number = num;
  let restDiv = 0;
  let happyN = number;

  while (happyN >= 10) {
    happyN = 0;
    while (number >= 1) {
      restDiv = number % 10;
      number = Math.trunc(number / 10);
      happyN += restDiv * restDiv;
    }
    number = happyN;
  }

  if (happyN === 1 || number === 7) {
    return true;
  }

  return false;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printHappyNumberResult(id1, id2) {
  const userNumber = readNumberValue(id1);
  if (userNumber === -1) {
    alert('The number is invalid! Please, enter the correct number!');
  }
  else {
    const resultValue = isHappyNumber_V2(userNumber);
    if (resultValue === true) {
      printStringValue(id2, 'The number is a happy number!');
    }
    else {
      printStringValue(id2, 'The number is not a happy number!');
    }
  }
}
