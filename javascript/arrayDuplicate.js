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
    else
        printArray(id2, duplicate(userArray));
}
