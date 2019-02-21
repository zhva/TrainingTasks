function moveZeros(arr){
if(!Array.isArray(arr) || arr.length <= 0)
    return [];

    var amountOfZeros = 0;
    
    var i = 0;
    while(i < arr.length){
        if(arr[i] == 0){
            amountOfZeros++;
            arr.splice(i,1);
        }
        else
            i++;
    }
    for(let i = 0; i < amountOfZeros; i++){
        arr.push(0);
    }
    
    return arr;
}
/***********************************************************************
Events
***********************************************************************/
function printMoveZeros(id1, id2){
    var userArray = readArray(id1);
    if(userArray.length < 0)
        alert("An array is empty or an object is not defined!");
    else
        printArray(id2, moveZeros(userArray));
}