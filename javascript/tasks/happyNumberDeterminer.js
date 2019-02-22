// require helper.js
/************************************************************************
                        happyNumberDeterminer.js
 ***********************************************************************/
function isHappyNumber_V1(number) {
    if(number < 1 || !Number.isInteger(number))
        return false;

    var happyN  = number;
    while(happyN >= 10){
        var strNumber = number + "";
        happyN = 0;
        for(var i = 0; i < strNumber.length; i++){
            happyN += strNumber[i]*strNumber[i];
        }
        number = happyN;
    }

   if(happyN == 1 || happyN == 7)
       return true;
    else
       return false;
}

function isHappyNumber_V2(number){
    if(number < 1 || !Number.isInteger(number))
        return false;

    var restDiv = 0;
    var happyN  = number;

    while(happyN >= 10){
        happyN = 0;
        while(number >= 1){
            restDiv = number % 10;
            number = Math.trunc(number/ 10);
            happyN += restDiv*restDiv;
        }
        number = happyN;
    }
    
    if(happyN == 1 || number == 7)
        return true;
    else
        return false;  
}
/***********************************************************************
Events
***********************************************************************/
function printHappyNumberResult(id1, id2){
    var userNumber = readNumberValue(id1);
    if(userNumber == -1){
        alert("The number is invalid! Please, enter the correct number!");
    }
    else 
        var resultValue = isHappyNumber_V2(userNumber);
        if(resultValue == true)
            printStringValue(id2, "The number is a happy number!");
        else
            printStringValue(id2, "The number is not a happy number!")

}