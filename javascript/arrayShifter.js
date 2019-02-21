function arrayShift_V1(arr, m) {
    if(!Array.isArray(arr) || arr.length <= 0 || !Number.isSafeInteger(m) )
        return [];

    var n = arr.length;
    var k = m % n;
    if (k < 0)
        k = n + k;

    if (k == n/2)
    {
        for(let i = 0; i < k; i++){        
            var temp = arr[i+k];
            arr[i+k] = arr[i];
            arr[i] = temp;
        }    
    }
    else{
        var from = 0;
        var to = k;
        var tempTo = arr[to];
        var tempFrom = arr[from];

        for(let i = 0; i < n; i++){        
            arr[to] = tempFrom;

            from = to;
            to = (from + k) % n;

            tempFrom = tempTo;
            tempTo = arr[to];
        }
    }
    return arr;
}

function arrayShift_V2(arr, k){
    if(!Array.isArray(arr) || arr.length <= 0 || !Number.isSafeInteger(k))
        return [];

    var lastElement = 0;
    var n = arr.length;
    if (k < 0)
        k = n + k;
    
    for(let i = 0; i < k; i++){
        lastElement = arr.pop();
        arr.unshift(lastElement);
    }
  return arr; 
}

/***********************************************************************
Events
***********************************************************************/
function printShiftedArray(id1,id2, id3) {
    var userArray = readArray(id1);
    var shift = readNumberValue(id2);
    if(userArray.length < 0)
        alert("An array is empty or an object is not defined!");
    else if(shift == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printArray(id3, arrayShift_V1(userArray, shift));
}