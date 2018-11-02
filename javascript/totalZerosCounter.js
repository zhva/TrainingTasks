function readNumberValue(crtlId){
    var ctrl = document.getElementById(crtlId);
    if (ctrl == null)
        return -1;

    var numberN = parseInt(ctrl.value, 10);

    if (!Number.isSafeInteger(numberN) || Number.isNaN(numberN) || numberN < 0)
        return -1;
    else
        return numberN;
}

function printIntValue(ctrlId, intValue){
    var ctrl = document.getElementById(ctrlId);
    if (ctrl == null)
        return;
    
    ctrl.value = intValue;
}

function zerosCounter(numberId) {
    var numberN = readNumberValue(numberId);
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

/***********************************************************************
Events
***********************************************************************/

function printZerosCountResult(id1, id2) {
    var num = zerosCounter(id1);
    if (num == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printIntValue(id2, num);
}
