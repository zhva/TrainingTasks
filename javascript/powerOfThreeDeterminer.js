function isPowerOfThree(number){
    if(number < 1 || number > Number.MAX_SAFE_INTEGER|| !Number.isInteger(number))
        return false;
    
    while(number % 3 == 0){
        number /= 3;
    }

    if(number == 1)
        return true;
    else
        return false;

}

/***********************************************************************
Events
***********************************************************************/
function printPowerOfThreeresult(id1, id2){
    var userNumber = readNumberValue(id1);
    if (userNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else{
        var resultValue = isPowerOfThree(userNumber);

        if(resultValue == true)
            printStringValue(id2,"The number is power of three!");
        else 
            printStringValue(id2, "The number isn't power of three!");
    }
}