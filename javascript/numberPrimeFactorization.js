function numberPrimeFactorization(number){
    if(!Number.isInteger(number) || number < 2)
        return [];

    var primeFactorsArray = [];

    for(var i = 2; i <= number; i++){
        while(number % i == 0){
            if(primeNumberCheck(i)){
                primeFactorsArray.push(i);
            }
        number /= i;
        }
    }
    return primeFactorsArray;
}

/***********************************************************************
Events
***********************************************************************/
function printNumberPrimeFactorizationResult(id1, id2){
    var userNumber = readNumberValue(id1);
    if(userNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printArray(id2,numberPrimeFactorization(userNumber));
}