// require helper.js
//---------------------------------------------------------------------------
//                        digitsReverser.js
//---------------------------------------------------------------------------
// eslint-disable-next-line camelcase
function didgitsReverser_V1(number) {
  if (!Number.isInteger(number) || !Number.isSafeInteger(number) || number === 0) {
    return -1;
  }

  let residueOfDiv;
  let revercedNumber = 0;
  let tempNumber = number;

  while (tempNumber !== 0) {
    if (tempNumber < 0) {
      tempNumber = Math.abs(tempNumber);
    }
    residueOfDiv = tempNumber % 10;
    tempNumber = Math.floor(tempNumber / 10);
    if (revercedNumber === 0) {
      revercedNumber = residueOfDiv;
    }
    else {
      revercedNumber = revercedNumber * 10 + residueOfDiv;
    }
  }

  if (number < 0) {
    revercedNumber *= -1;
  }

  return revercedNumber;
}

// eslint-disable-next-line camelcase
function didgitsReverser_V2(number) {
  if (!Number.isInteger(number) || !Number.isSafeInteger(number) || number === 0) {
    return -1;
  }

  const numberStr = number.toString();

  const arrayStrElem = numberStr.split('');
  const strLength = arrayStrElem.length;

  for (let i = 0; i < strLength; i++) {
    arrayStrElem[i] = numberStr.charAt(strLength - i - 1);
  }

  let revercedNumber = Number.parseInt(arrayStrElem.join(''), 10);
  if (number < 0) {
    revercedNumber *= -1;
  }

  return revercedNumber;
}

//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printDidgitsReverser(id1, id2) {
  const userNumber = readNumberValue(id1);

  if (userNumber === -1) {
    alert('The number is invalid! Please, enter the correct number!');
  }
  else {
    printIntValue(id2, didgitsReverser_V1(userNumber));
  }
}
