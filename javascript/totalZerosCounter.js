function getNumberN(numberId){
    var objNumber = document.getElementById(numberId);
    if (objNumber == null)
        return -1;

    var numberN = parseInt(objNumber.value, 10);

    if (!Number.isSafeInteger(numberN) || Number.isNaN(numberN) || numberN < 0)
        return -1;
    else
        return numberN;
}

function zerosCounter(numberId) {
    var numberN = getNumberN(numberId);
    if (numberN == -1)
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
 function resultOutput(outputId, amountOfZeros){
    var objOutput = document.getElementById(outputId);
    if (objOutput == null)
        return;
    
    objOutput.value = amountOfZeros;
 }

/***********************************************************************
Events
***********************************************************************/

function printResult(id1, id2) {
    var num = zerosCounter(id1);
    if (num == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        resultOutput(id2, num);
}
