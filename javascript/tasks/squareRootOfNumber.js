// require helper.js
//---------------------------------------------------------------------------
//                        squareRootOfNumber.js
//---------------------------------------------------------------------------
// eslint-disable-next-line camelcase
function squareRoot_V1(num) {
  if (num < 1 || num > Number.MAX_SAFE_INTEGER || !Number.isInteger(num)) {
    return 0;
  }
  const number = num;
  let sqrt = 1;
  for (let i = 1; i <= number / 2; i++) {
    const res = Math.trunc(number / i);
    if (res <= i) {
      sqrt = res;
      break;
    }
  }
  return sqrt;
}
// eslint-disable-next-line camelcase
function squareRoot_V2(num) {
  if (num < 1 || !Number.isInteger(num) || num > Number.MAX_SAFE_INTEGER) {
    return 0;
  }

  const number = num;
  let left = 0;
  let right = number;
  let middle = number / 2;

  while (true) {
    const multipl = Math.floor(middle * middle);
    if (multipl === number) {
      return Math.trunc(middle);
    }
    if (multipl > number) {
      right = middle;
      middle -= (right - left) / 2;
    }
    if (multipl < number) {
      left = middle;
      middle += (right - left) / 2;
    }
  }
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printSquareRootResult(id1, id2) {
  const userNumber = readNumberValue(id1);

  if (userNumber === -1) {
    alert('The number is invalid! Please, enter the correct number!');
  }
  else {
    printIntValue(id2, squareRoot_V2(userNumber));
  }
}
