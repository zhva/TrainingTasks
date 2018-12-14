function deleteDuplicateMemebers(userArray){
    if(!Array.isArray(userArray) || userArray.length < 0)
        return [];

    for(var i = 0; i < userArray.length; i++){
        var j = i + 1;
        while(j < userArray.length){
            if(userArray[i] === userArray[j]){
                userArray.splice(j, 1);
            }
            else 
                j++;
        }
    }    
      
    return userArray;
}
/***********************************************************************
Events
***********************************************************************/
function printArayWithUniqueMembers(id1,id2) {
    var userArray = readArray(id1);
    if(userArray.length < 0)
        alert("An array is empty or an object is not defined!");
    else
        printArray(id2, deleteDuplicateMemebers(userArray));
}