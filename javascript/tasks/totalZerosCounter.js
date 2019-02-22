// require helper.js
/************************************************************************
                        totalZerosCounter.js
 ***********************************************************************/
function countZeros(numberN) {
    if(!Number.isInteger(numberN) || numberN < 1 || !Number.isSafeInteger(numberN))
        return -1;

    var countOfZeros = 0;

    while(numberN > 0){
        if(numberN % 10 == 0){
            countOfZeros++;
        }
        numberN = Math.floor(numberN /= 10);
    }
    return countOfZeros;
}

/***********************************************************************
Events
***********************************************************************/

function printZerosCountResult(id1, id2) {
    var userNum = readNumberValue(id1);
    if (userNum == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printIntValue(id2, countZeros(userNum));
}
