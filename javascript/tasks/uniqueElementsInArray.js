// require helper.js
/************************************************************************
                        uniqueElementsInArray.js
 ***********************************************************************/
function deleteDuplicateMembers_v1(userArray){
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

function deleteDuplicateMembers_v2(userArray){
    if(!Array.isArray(userArray) || userArray.length < 0)
        return [];
        
    return Array.from(new Set(userArray));
}

function deleteDuplicateMembers_v3(userArray){
    if(!Array.isArray(userArray) || userArray.length < 0)
        return [];

    var uniqueArray = userArray.filter(function(item, elementIndex, arr) {
            return arr.indexOf(item) == elementIndex;
    });
  
    return uniqueArray;
}

function deleteDuplicateMembers_v4(userArray){
    if(!Array.isArray(userArray) || userArray.length < 0)
        return [];
        
    var seen = {};
    return userArray.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

function deleteDuplicateMembers_v5(userArray){
    if(!Array.isArray(userArray) || userArray.length < 0)
        return [];

    var prims = {"boolean":{}, "number":{}, "string":{}}, objs = []; 
    return userArray.filter(function(item) {
        var type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}

function deleteDuplicateMembers_v6(userArray){
    if(!Array.isArray(userArray) || userArray.length < 0)
        return [];
        
    var result = [];
    userArray.forEach(function(item) {
            if(result.indexOf(item) < 0) {
                result.push(item);
            }
    });
    return result;
}

function deleteDuplicateMembers_v7(userArray){
    if(!Array.isArray(userArray) || userArray.length < 0)
        return [];

    var seen = {};
    var out = [];
    var len = userArray.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = userArray[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }

    return out;
}

/***********************************************************************
Events
***********************************************************************/
function printArayWithUniqueMembers(id1,id2) {
    var userArray = readArray(id1);
    if(userArray.length < 0)
        alert("An array is empty or an object is not defined!");
    else
        printArray(id2, deleteDuplicateMembers_v2(userArray));
}