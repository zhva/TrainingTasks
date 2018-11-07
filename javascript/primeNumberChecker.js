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

function primeNumberCheck(number) {
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
    var userNumber = readNumberValue(id1);
    if (userNumber == -1)
        return alert("The number is invalid! Please, enter the correct number!");;

    var resultValue = primeNumberCheck(userNumber);

    if(resultValue == true)
        printStringValue(id2,"The number is prime!");
    else 
        printStringValue(id2, "The number isn't prime!");
}
       
