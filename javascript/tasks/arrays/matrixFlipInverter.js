/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//     matrixFlipInverter.js
//---------------------------------------------------------------------------
function flipAndInvertImage(A) {
  if (!Array.isArray(A) || A.length !== A[0].length || A.length === 0) {
    return [];
  }

  const matrix = [...A];
  const arrLength = matrix.length;
  let temp = 0;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength / 2; j++) {
      if ((matrix[i][arrLength - 1 - j] !== 0 && matrix[i][arrLength - 1 - j] !== 1)
      || (matrix[i][j] !== 0 && matrix[i][j] !== 1)) {
        return [];
      }
      temp = 1 - matrix[i][arrLength - 1 - j];
      matrix[i][arrLength - 1 - j] = 1 - matrix[i][j];
      matrix[i][j] = temp;
    }
  }
  return matrix;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printFlipAndInvertImage(id1, id2) { // eslint-disable-line no-unused-vars
  const userArray = read2DArray(id1);
  if (userArray.length < 0) {
    alert('An array is empty or an object is not defined!');
  }
  else {
    print2DArray(id2, flipAndInvertImage(userArray));
  }
}
