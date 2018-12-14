function greatestCommonDivisorCounter(firstNumber, secondNumber){
    if(!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber))
        return 0;

    firstNumber = Math.abs(firstNumber);
    secondNumber = Math.abs(secondNumber);
    var greatestCommonDivisor = 0,
        minNumber = Math.min(firstNumber, secondNumber),
        maxNumber = Math.max(firstNumber, secondNumber);
        
    if(maxNumber % minNumber == 0)
        return minNumber;
        
    for(var i = 1; i <= minNumber; i++){
        if(firstNumber % i == 0 && secondNumber % i == 0)
            greatestCommonDivisor = i;
    }

    // while(secondNumber) {
    //     greatestCommonDivisor = secondNumber;
    //     secondNumber = firstNumber % secondNumber;
    //     firstNumber = greatestCommonDivisor;
    //   }
   
    return greatestCommonDivisor;
}
/***********************************************************************
Events
***********************************************************************/
function printGreatestCommonDivisorCounter(id1, id2, id3){
    var firstUserNumber = readNumberValue(id1);
    var secondtUserNumber = readNumberValue(id2);

    if(firstUserNumber == -1 || secondtUserNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printIntValue(id3, greatestCommonDivisorCounter(firstUserNumber, secondtUserNumber));
}