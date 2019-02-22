// require helper.js
/************************************************************************
                        didgitsReverser.js
 ***********************************************************************/
function didgitsReverser_V1(number){
    if(!Number.isInteger(number) || !Number.isSafeInteger(number) || number == 0)
        return -1;

    var residueOfDiv;
    var revercedNumber = 0;
    var tempNumber = number;
    
    while(tempNumber != 0){
        if(tempNumber < 0)
            tempNumber = Math.abs(tempNumber);

        residueOfDiv = tempNumber % 10;
        tempNumber = Math.floor(tempNumber / 10);
        if(revercedNumber == 0 )
            revercedNumber = residueOfDiv;  
        else 
            revercedNumber = revercedNumber * 10 + residueOfDiv;
    }

    if (number < 0)
        revercedNumber *= -1;

    return revercedNumber;
}

function didgitsReverser_V2(number){
    if(!Number.isInteger(number) || !Number.isSafeInteger(number) || number == 0)
        return -1;

    var numberStr = number.toString();

    var arrayStrElem = numberStr.split("");
    var strLength = arrayStrElem.length;

    for(var i = 0; i < strLength; i++){
        arrayStrElem[i] = numberStr.charAt(strLength-i-1);
    }

    var revercedNumber = Number.parseInt(arrayStrElem.join(""));
    if (number < 0)
        revercedNumber *= -1;

    return revercedNumber;
}

/***********************************************************************
Events
***********************************************************************/

function printDidgitsReverser(id1, id2){
    var userNumber = readNumberValue(id1);

    if(userNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printIntValue(id2, didgitsReverser_V1(userNumber));
}