function reverseString(str) {
    if(str == null )
        return "";

    var arrayStrElem = str.split("");
    var strLength = arrayStrElem.length;

    for(var i = 0; i < strLength; i++){
        arrayStrElem[i] = str.charAt(strLength-i-1);
    }

    return arrayStrElem.join("");
}

/***********************************************************************
Events
***********************************************************************/

function printReversedStringResult(id1, id2){
    var userStr = readStringValue(id1);
    if(userStr == "")
        alert("Please, enter a string!");
    else
        printStringValue(id2, reverseString(userStr));
}
