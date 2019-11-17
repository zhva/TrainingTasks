/* requires:
    helper.js
*/
//---------------------------------------------------------------------------
//                        transposeMatrix.js
//---------------------------------------------------------------------------
function transposeMatrix(A) {
  if (!Array.isArray(A) || A.length < 1 || A[0].length < 1) {
    return [];
  }

  const rowLength = A.length;
  const colLength = A[0].length;
  const transposedA = [];
  for (let i = 0; i < colLength; i++) {
    transposedA[i] = [];
  }
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      transposedA[j][i] = A[i][j];
    }
  }
  return transposedA;
}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printTransposedMatrix(id1, id2) {
  const maxtrix = read2DArray(id1);
  if (maxtrix === []) {
    alert('The matrix is invalid! Please, enter the correct value!');
  }
  else {
    print2DArray(id2, transposeMatrix(maxtrix));
  }
}
