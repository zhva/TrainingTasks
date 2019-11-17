/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//     autoFill.js
//---------------------------------------------------------------------------
function getRandomNumber(minV, maxV) {
  const randVal = Math.floor(minV + Math.random() * (maxV - minV + 1));

  return randVal;
}

function getRandomChar() {
  const charA = 'a'.charCodeAt(0);
  const charZ = 'z'.charCodeAt(0);
  const randomCharCode = getRandomNumber(charA, charZ);

  return String.fromCharCode(randomCharCode);
}

function getRandomString(maxL) {
  let randomStr = '';
  const stringLength = getRandomNumber(1, maxL);
  for (let i = 0; i < stringLength; i++) {
    randomStr += getRandomChar();
  }
  return randomStr;
}

function getRandomArray(minL, maxL, minV, maxV) {
  const randomArray = [];
  const arrayLength = getRandomNumber(minL, maxL);
  for (let i = 0; i < arrayLength; i++) {
    randomArray[i] = getRandomNumber(minV, maxV);
  }
  return randomArray;
}

function getRandom2DArray(minL, maxL, minV, maxV) {
  const random2DArray = [];
  const arrayLength = getRandomNumber(minL, maxL);
  for (let i = 0; i < arrayLength; i++) {
    random2DArray.push([]);
  }

  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < arrayLength; j++) {
      random2DArray[i][j] = getRandomNumber(minV, maxV);
    }
  }
  return random2DArray;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function onButtonFillNumberClick(elemId, minV = 1, maxV = 10000) {
  const randNum = getRandomNumber(minV, maxV);
  printIntValue(elemId, randNum);
}

function onButtonFillStringClick(elemId, maxL = 20) {
  const randStr = getRandomString(maxL);
  printStringValue(elemId, randStr);
}

function onButtonFillArrayClick(elemId, minL = 4, maxL = 10, minV = 0, maxV = 100) {
  const randArr = getRandomArray(minL, maxL, minV, maxV);
  printArray(elemId, randArr);
}

function onButtonFill2DArrayClick(elemId, minL = 4, maxL = 10, minV = 0, maxV = 100) {
  const randArr2D = getRandom2DArray(minL, maxL, minV, maxV);

  print2DArray(elemId, randArr2D);
}
