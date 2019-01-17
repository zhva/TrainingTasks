function primeNumbersCounter(number){
    if(!Number.isInteger(number) || number < 2)
        return -1;

    var primeFactorsCount = 0;

    for(var i = 2; i < number; i++){
        if(primeNumberCheck(i)){
            primeFactorsCount++;
        }
    }
    return primeFactorsCount;
}
/***********************************************************************
Events
***********************************************************************/
function printPrimeNumbersCounter(id1, id2){
    var userNumber = readNumberValue(id1);
    if(userNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printIntValue(id2,primeFactorsCounter(userNumber));
}