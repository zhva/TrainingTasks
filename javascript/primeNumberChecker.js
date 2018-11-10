function primeNumberCheck(number) {
    if(!Number.isInteger(number) || number < 2)
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
        alert("The number is invalid! Please, enter the correct number!");
    else{
        var resultValue = primeNumberCheck(userNumber);

        if(resultValue == true)
            printStringValue(id2,"The number is prime!");
        else 
            printStringValue(id2, "The number isn't prime!");
    }

}

       
