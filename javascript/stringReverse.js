function readStringValue(ctrlId) {
    var ctrl = document.getElementById(ctrlId);
    if(ctrl == null)
        return "";

    return ctrl.value;
}

function printStringValue(ctrlId, strValue){
    var ctrl = document.getElementById(ctrlId);
    if(ctrl == null)
        return;
     
    return ctrl.value = "\"" + strValue + "\"";
}

function reverseString(stringId) {
    var userStr = readStringValue(stringId);

    var arrayStrElem = new Array();
    var strLength = userStr.length;

    for(var i = 0; i < strLength; i++){
        arrayStrElem[i] = userStr.charAt(strLength-i-1);
    }

    return arrayStrElem.join("");
}

/***********************************************************************
Events
***********************************************************************/

function printReversedStringResult(id1, id2){
    //outputStringResult(id2, reverseString(id1));
    printStringValue(id2, reverseString(id1));
}
