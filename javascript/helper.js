/***********************************************************************
Read Values
***********************************************************************/
function readNumberValue(crtlId){
    var ctrl = document.getElementById(crtlId);
    if (ctrl == null)
        return -1;

    var numberN = parseInt(ctrl.value, 10);

    if (Number.isNaN(numberN) || numberN < 0 || !Number.isSafeInteger(numberN))
        return -1;
    else
        return numberN;
}
function readStringValue(ctrlId) {
    var ctrl = document.getElementById(ctrlId);
    if(ctrl == null)
        return "";

    return ctrl.value;
}
function readArray(ctrlId) {
    var ctrl = document.getElementById(ctrlId);
    if(ctrl == null)
        return []; 
        
    var arr = ctrl.value.replace(/\s\s+/g, " ").split(" ");
    return arr;
}
/***********************************************************************
Print Values
***********************************************************************/
function printStringValue(ctrlId, strValue){
    var ctrl = document.getElementById(ctrlId);
    if(ctrl == null)
        return;
    
    return ctrl.value = "\"" + strValue + "\"";
}
function printIntValue(ctrlId, intValue){
    var ctrl = document.getElementById(ctrlId);
    if (ctrl == null)
        return;
    
    ctrl.value = intValue;
}
function printArray(ctrlId, arr){
    var ctrl = document.getElementById(ctrlId);
    if(ctrl == null)
        return; 
    
    return ctrl.value = arr.join(" ");
}
