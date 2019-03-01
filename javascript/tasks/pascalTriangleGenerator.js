// require helper.js
//---------------------------------------------------------------------------
//                        pascalTriangleGenerator.js
//---------------------------------------------------------------------------
function generatePascalTriangle(numRows) {
  function countPascalRow(arr) {
    const arrLength = arr.length;
    const arrRow = [];
    arrRow[0] = 1;
    arrRow[arrLength] = 1;
    if (arrLength > 1) {
      for (let i = 1; i < arrLength; i++) {
        arrRow[i] = arr[i - 1] + arr[i];
      }
    }
    return arrRow;
  }

  const arrPascal = [];
  if (numRows > 0) {
    arrPascal[0] = [1];
    for (let i = 1; i < numRows; i++) {
      arrPascal[i] = countPascalRow(arrPascal[i - 1]);
    }
  }
  return arrPascal;
}

//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printPascalTriangle(id1, id2) {
  const numberOfRows = readNumberValue(id1);
  if (numberOfRows === -1) {
    alert('The number is invalid! Please, enter the correct number!');
  }
  else {
    document.getElementById('pacsalLinkId').style.cursor = 'pointer';
    document.getElementById('pacsalLinkId').style.pointerEvents = 'all';
    printArray(id2, generatePascalTriangle(numberOfRows));
  }
}
