// require helper.js
/************************************************************************
                        squareRootOfNumber.js
 ***********************************************************************/
function squareRoot_V1(number){
    if(number < 1 || number > Number.MAX_SAFE_INTEGER || !Number.isInteger(number))
        return 0;

    var sqrt = 1;
    for(var i = 1; i <= number/2; i++){
        var res = Math.trunc(number/i);
        if(res > i)
            continue;
        else{
            sqrt = res;
            break;
        }
    }
    return sqrt;
}

function squareRoot_V2(number){
    if (number < 1 || !Number.isInteger(number) || number > Number.MAX_SAFE_INTEGER)
        return 0;
        
    var left = 0;
    var right = number;
    var middle = number/2;

    while(true){
        var multipl = Math.floor(middle*middle);
        if(multipl == number){
            return Math.trunc(middle); 
        }
        else if(multipl > number){
            right = middle;
            middle -= (right-left)/2; 
        }
        else if(multipl < number){
            left = middle;
            middle += (right-left)/2;
        }
    }
       
}
/***********************************************************************
Events
***********************************************************************/
function printSquareRootResult(id1, id2){
    var userNumber = readNumberValue(id1);

    if(userNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printIntValue(id2, squareRoot_V2(userNumber));
}