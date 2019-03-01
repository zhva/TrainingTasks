// require helper.js
//---------------------------------------------------------------------------
//                        twoSortedArraysMerge.js
//---------------------------------------------------------------------------
function mergeSortedArrays(userArray1, userArray2){
    if(!Array.isArray(userArray1) && !Array.isArray(userArray2))
        return [];
    if(!Array.isArray(userArray1) || userArray1.length <= 0)
        return userArray2;
    if(!Array.isArray(userArray2) || userArray2.length <= 0)
        return userArray1;

    //if(!sorted)
    userArray1 = userArray1.sort();
    userArray2 = userArray2.sort();
    var arr1 = [];
    var arr2 = [];

     for (var i = 0; i < userArray1.length; i++)
        if (userArray1[i] != null && !isNaN(userArray1[i]))
            arr1.push(userArray1[i]);

    for (var i  =0; i < userArray2.length; i++)
        if (userArray2[i] != null && !isNaN(userArray2[i]))
            arr2.push(userArray2[i]);

    var i = 0;
    while(i < arr1.length && arr2.length > 0){
        var next = arr2[0];
        if(next <= arr1[0]){
            arr1.splice(0, 0, next);
            arr2.splice(0, 1);
        }        
        else if(arr1[arr1.length - 1] <= next){
            arr1.splice(arr1.length, 0, next);
            arr2.splice(0, 1);
        }
        else if(next >= arr1[i] && next <= arr1[i+1]){
            arr1.splice(i+1, 0, next);
            arr2.splice(0, 1);
        }
        else
            i++;
    }

    return arr1;

}
//---------------------------------------------------------------------------
// Events
//---------------------------------------------------------------------------
function printMergedArray(id1, id2, id3) {
    var userArray1 = readArray(id1);
    var userArray2 = readArray(id2);
    if(userArray1.length <= 0 || userArray2 <= 0)
        alert("An array is empty or an object is not defined!");
    else
        printArray(id3, mergeSortedArrays(userArray1, userArray2));
}