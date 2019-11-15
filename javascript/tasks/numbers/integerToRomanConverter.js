/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//     integerToRomanConverter.js
//---------------------------------------------------------------------------
function intToRoman(num) {
  if (num < 1 || num > 3999 || Number.isNaN(num) || num === null) {
    return '';
  }

  let number = num;
  const romanLookup = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  const roman = [];
  const romanKeys = Object.keys(romanLookup);
  let curValue;
  let index;
  let count = 1;

  for (const numeral in romanLookup) {
    if (Object.prototype.hasOwnProperty.call(romanLookup, numeral)) {
      curValue = romanLookup[numeral];
      index = romanKeys.indexOf(numeral);

      while (number >= curValue) {
        if (count < 4) {
          roman.push(numeral);
        }
        else if (roman.indexOf(romanKeys[index - 1]) > -1) {
          roman.splice(roman.indexOf(romanKeys[index - 1]));
          roman.push(romanKeys[index], romanKeys[index - 2]);
        }
        else {
          roman.splice(-3);
          roman.push(romanKeys[index], romanKeys[index - 1]);
        }
        number -= curValue;
        count++;
      }
      count = 1;
    }
  }
  return roman.join('');
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printIntToRomanResult(id1, id2) {
  const userNumber = readNumberValue(id1);
  if (userNumber === -1) {
    alert('The number is invalid! Please, enter the correct number!');
  }
  else {
    printStringValue(id2, intToRoman(userNumber));
  }
}