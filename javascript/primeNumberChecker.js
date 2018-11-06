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

function printStringValue(ctrlId, strValue){
    var ctrl = document.getElementById(ctrlId);
    if(ctrl == null)
        return;
     
    return ctrl.value = "\"" + strValue + "\"";
}

function primeNumberCheck(numberId) {
    var number = readNumberValue(numberId);
    if (number == -1)
        return -1;

    if(number < 2)
       return false;

    for(var i = 2; i <= Math.floor(Math.sqrt(number)); i++){
        if(number % i == 0)
            return false;
    }
    return true;
}
/***********************************************************************
Events
***********************************************************************/
function printPrimeNumberCheckResult(id1, id2){
    var resultValue = primeNumberCheck(id1);

    if (resultValue == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else if(resultValue == true)
        printStringValue(id2,"The number is prime!");
    else 
        printStringValue(id2, "The number isn't prime!");
}
       
