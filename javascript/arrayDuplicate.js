function readArray(ctrlId) {
    var ctrl = document.getElementById(ctrlId);
    if(ctrl == null)
        return []; 
        
    var arr = ctrl.value.replace(/\s\s+/g, " ").split(" ");
    return arr;
}

function printArray(ctrlId, arr){
    var ctrl = document.getElementById(ctrlId);
    if(ctrl == null)
        return; 
     
    return ctrl.value = arr.join(" ");
}

function duplicate(arr) {
    return arr.concat(arr);
}

/***********************************************************************
Events
***********************************************************************/
function printduplicateArray(id1,id2) {
    var userArray = readArray(id1);
    if(!Array.isArray(userArray))
        return;

    var resArray = duplicate(userArray);

    printArray(id2, resArray);
}
