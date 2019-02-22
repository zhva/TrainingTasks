// require helper.js
/************************************************************************
                        primeNumberChecker.js
 ***********************************************************************/
function primeNumberCheck_V1(number) {
    if(!Number.isInteger(number) || number < 2)
       return false;

    for(var i = 2; i <= Math.floor(Math.sqrt(number)); i++){
        if(number % i == 0)
            return false;
    }
    return true;
}

function primeNumberCheck_V2(number) {  
    if(!Number.isInteger(number) || number < 2)
        return false;
    
    var isPrimeArray = [];
    for(var i = 2; i <= number; i++){
        isPrimeArray[i] = true; 
    }

    for(var i = 2; i*i <= number; i++){
        if(isPrimeArray[i] == false){
            continue;
        }
        if(isPrimeArray[i]){
            for(var j = i*i; j <= number; j+=i)
                isPrimeArray[j] = false;
        }
    }
 
    return isPrimeArray[number];
};
/***********************************************************************
Events
***********************************************************************/
function printPrimeNumberCheckResult(id1, id2){
    var userNumber = readNumberValue(id1);
    if (userNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else{
        var resultValue = primeNumberCheck_V1(userNumber);

        if(resultValue == true)
            printStringValue(id2,"The number is prime!");
        else 
            printStringValue(id2, "The number isn't prime!");
    }

}

       
