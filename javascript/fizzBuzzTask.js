function fizzBuzzOutput(userNumber){
    if(!Number.isInteger(userNumber) || userNumber < 1 || userNumber > 100)
        return [];
     
    var outputStr = "";    
    for(var i = 1; i <= userNumber; i++){
        var canDivideBy3 = (i % 3 == 0);
        var canDivideBy5 = (i % 5 == 0);

        if(canDivideBy3 && canDivideBy5)
            outputStr += "FizzBuzz" + " ";
        else if(canDivideBy3)
            outputStr += "Fizz" + " ";
        else if(canDivideBy5)
            outputStr += "Buzz" + " ";
        else
            outputStr += i  + " ";
    }    

    return outputStr.trimRight();
}

/***********************************************************************
Events
***********************************************************************/
function fizzBuzzPrint(id1, id2){
    var userNum = readNumberValue(id1);

    if (userNum == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printStringValue(id2, fizzBuzzOutput(userNum));
}