// require helper.js
// require primeNumberChecker.js
/************************************************************************
                        primeFactorsOfNumber.js
 ***********************************************************************/
function primeFactorsOfNumber(number){
    if(!Number.isInteger(number) || number < 2)
        return [];

    var primeFactorsArray = [];

    for(var i = 2; i <= number; i++){
        if(number % i == 0){
            if(primeNumberCheck_V1(i)){
                primeFactorsArray.push(i);
            }
        }
    }
    return primeFactorsArray;
}
/***********************************************************************
Events
***********************************************************************/
function printPrimeFactorsResult(id1, id2){
    var userNumber = readNumberValue(id1);
    if(userNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printArray(id2,primeFactorsOfNumber(userNumber));
}