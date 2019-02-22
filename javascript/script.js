/************************************************************************
                        helper.js
 ***********************************************************************/
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

// require helper.js
/************************************************************************
                        arraDuplicate.js
 ***********************************************************************/
function duplicate(arr) {
    if(Array.isArray(arr) && arr.length > 0)
        return arr.concat(arr);
    else
        return [];

}

/***********************************************************************
Events
***********************************************************************/
function printduplicateArray(id1,id2) {
    var userArray = readArray(id1);
    if(userArray.length < 0)
        alert("An array is empty or an object is not defined!");
    else
        printArray(id2, duplicate(userArray));
}

// require helper.js
/************************************************************************
                        arraShifter.js
 ***********************************************************************/
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
// require helper.js
/************************************************************************
                        didgitsReverser.js
 ***********************************************************************/
function didgitsReverser_V1(number){
    if(!Number.isInteger(number) || !Number.isSafeInteger(number) || number == 0)
        return -1;

    var residueOfDiv;
    var revercedNumber = 0;
    var tempNumber = number;
    
    while(tempNumber != 0){
        if(tempNumber < 0)
            tempNumber = Math.abs(tempNumber);

        residueOfDiv = tempNumber % 10;
        tempNumber = Math.floor(tempNumber / 10);
        if(revercedNumber == 0 )
            revercedNumber = residueOfDiv;  
        else 
            revercedNumber = revercedNumber * 10 + residueOfDiv;
    }

    if (number < 0)
        revercedNumber *= -1;

    return revercedNumber;
}

function didgitsReverser_V2(number){
    if(!Number.isInteger(number) || !Number.isSafeInteger(number) || number == 0)
        return -1;

    var numberStr = number.toString();

    var arrayStrElem = numberStr.split("");
    var strLength = arrayStrElem.length;

    for(var i = 0; i < strLength; i++){
        arrayStrElem[i] = numberStr.charAt(strLength-i-1);
    }

    var revercedNumber = Number.parseInt(arrayStrElem.join(""));
    if (number < 0)
        revercedNumber *= -1;

    return revercedNumber;
}

/***********************************************************************
Events
***********************************************************************/

function printDidgitsReverser(id1, id2){
    var userNumber = readNumberValue(id1);

    if(userNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printIntValue(id2, didgitsReverser_V1(userNumber));
}
// require helper.js
/************************************************************************
                        fizzBuzzTask.js
 ***********************************************************************/
function fizzBuzzOutput(userNumber){
    if(!Number.isInteger(userNumber) || userNumber < 1 || userNumber > 100)
        return [];
     
    var outputStr = "";    
    for(var i = 1; i <= userNumber; i++){
        var canDivideBy3 = (i % 3 == 0);
        var canDivideBy5 = (i % 5 == 0);

        if(canDivideBy3 && canDivideBy5)
            outputStr += "FizzBuzz" + " ";
        else if(canDivideBy3)
            outputStr += "Fizz" + " ";
        else if(canDivideBy5)
            outputStr += "Buzz" + " ";
        else
            outputStr += i  + " ";
    }    

    return outputStr.trimRight();
}

/***********************************************************************
Events
***********************************************************************/
function fizzBuzzPrint(id1, id2){
    var userNum = readNumberValue(id1);

    if (userNum == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printStringValue(id2, fizzBuzzOutput(userNum));
}
// require helper.js
/************************************************************************
                        greatestCommonDivisorCounter.js
 ***********************************************************************/
function greatestCommonDivisorCounter(firstNumber, secondNumber){
    if(!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber))
        return 0;

    firstNumber = Math.abs(firstNumber);
    secondNumber = Math.abs(secondNumber);
    var greatestCommonDivisor = 0,
        minNumber = Math.min(firstNumber, secondNumber),
        maxNumber = Math.max(firstNumber, secondNumber);
        
    if(maxNumber % minNumber == 0)
        return minNumber;
        
    for(var i = 1; i <= minNumber; i++){
        if(firstNumber % i == 0 && secondNumber % i == 0)
            greatestCommonDivisor = i;
    }

    // while(secondNumber) {
    //     greatestCommonDivisor = secondNumber;
    //     secondNumber = firstNumber % secondNumber;
    //     firstNumber = greatestCommonDivisor;
    //   }
   
    return greatestCommonDivisor;
}
/***********************************************************************
Events
***********************************************************************/
function printGreatestCommonDivisorCounter(id1, id2, id3){
    var firstUserNumber = readNumberValue(id1);
    var secondtUserNumber = readNumberValue(id2);

    if(firstUserNumber == -1 || secondtUserNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printIntValue(id3, greatestCommonDivisorCounter(firstUserNumber, secondtUserNumber));
}
// require helper.js
/************************************************************************
                        happyNumberDeterminer.js
 ***********************************************************************/
function isHappyNumber_V1(number) {
    if(number < 1 || !Number.isInteger(number))
        return false;

    var happyN  = number;
    while(happyN >= 10){
        var strNumber = number + "";
        happyN = 0;
        for(var i = 0; i < strNumber.length; i++){
            happyN += strNumber[i]*strNumber[i];
        }
        number = happyN;
    }

   if(happyN == 1 || happyN == 7)
       return true;
    else
       return false;
}

function isHappyNumber_V2(number){
    if(number < 1 || !Number.isInteger(number))
        return false;

    var restDiv = 0;
    var happyN  = number;

    while(happyN >= 10){
        happyN = 0;
        while(number >= 1){
            restDiv = number % 10;
            number = Math.trunc(number/ 10);
            happyN += restDiv*restDiv;
        }
        number = happyN;
    }
    
    if(happyN == 1 || number == 7)
        return true;
    else
        return false;  
}
/***********************************************************************
Events
***********************************************************************/
function printHappyNumberResult(id1, id2){
    var userNumber = readNumberValue(id1);
    if(userNumber == -1){
        alert("The number is invalid! Please, enter the correct number!");
    }
    else 
        var resultValue = isHappyNumber_V2(userNumber);
        if(resultValue == true)
            printStringValue(id2, "The number is a happy number!");
        else
            printStringValue(id2, "The number is not a happy number!")

}
// require helper.js
/************************************************************************
                        moveZeros.js
 ***********************************************************************/
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
function printMoveZeros(id1, id2){  // eslint-disable-line no-unused-vars
    var userArray = readArray(id1);
    if(userArray.length < 0)
        alert("An array is empty or an object is not defined!");
    else
        printArray(id2, moveZeros(userArray));
}
// require helper.js
/************************************************************************
                        nthFibonacciNumberCounter.js
 ***********************************************************************/
function nthFibonacciNumberCounter(number){
    if(!Number.isInteger(number) || number < 0)
         return 0;

    var previousN = 0, 
        nthFibonacciN = 1; 

    for (var i = 0; i < number; i++) {
        if ((Number.MAX_VALUE - previousN) <= nthFibonacciN) {
            return Infinity;
        }
            
        nthFibonacciN = previousN + nthFibonacciN;
        previousN = nthFibonacciN - previousN;
    }

    return previousN;
}

/***********************************************************************
Events
***********************************************************************/
function printNthFibonacciNumber(id1, id2){
    var userNumber = readNumberValue(id1);
    if(userNumber == -1)
        alert("The index is invalid! The index schoud be more than 0!");
    else
        printIntValue(id2, nthFibonacciNumberCounter(userNumber));
}
// require helper.js
// require primeNumberChecker.js
/************************************************************************
                        numberPrimeFactorisation.js
 ***********************************************************************/
function numberPrimeFactorization(number){
    if(!Number.isInteger(number) || number < 2)
        return [];

    var primeFactorsArray = [];

    while(number % 2 == 0){
        primeFactorsArray.push(2);
        number /= 2;
    }
    for(var i = 3; i <= Math.floor(Math.sqrt(number)); i += 2){
        while(number % i == 0){
            if(primeNumberCheck_V1(i)){
                primeFactorsArray.push(i);
            }
        number /= i;
        } 
    }
    if(primeNumberCheck_V1(number)){
        primeFactorsArray.push(number);
    }
    return primeFactorsArray;
}

/***********************************************************************
Events
***********************************************************************/
function printNumberPrimeFactorizationResult(id1, id2){
    var userNumber = readNumberValue(id1);
    if(userNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printArray(id2,numberPrimeFactorization(userNumber));
}
// require helper.js
// require pascalTriangleGenerator.js
/************************************************************************
                        pascalTriangleDisplay.js
 ***********************************************************************/
function openPascalTriangle(url, param1){
    let dir = window.location.href;
    let fullURL = new URL(url, dir);

    fullURL.searchParams.set('param1', param1);

    //httpGetAsync(fullURL, null);
    window.location.href = fullURL;
}

function getUrlParam(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);     
 }


 //---------------------------------------------------------------------------------------------------------------------------
 function amountOfElements(numRows) {
    var amountOfElem = 0;
    for(let i = 1; i <= numRows; i++){
        amountOfElem += i;
    }
    return amountOfElem;
}

function hexagonCenters(prevFirstCenterPoint, radius, rowNumber){
    var arrCenterPoints = [];
    arrCenterPoints[0] = {X: prevFirstCenterPoint.X - radius, Y: prevFirstCenterPoint.Y + 1.5*radius};

    for(let i = 1; i < rowNumber; i++){
        arrCenterPoints[i] = {X: arrCenterPoints[i-1].X + 2*radius, Y: arrCenterPoints[i-1].Y};
    }

    return arrCenterPoints;
}

function hexagonTop(hexSenter, radius){
    var hexTop  = {X: hexSenter.X, Y: hexSenter.Y - radius};
    return hexTop;
}

function drawHexagon(hexCenter, radius, index, hexToCopy, textToCopy, pascalNumber){
    var hexTop = hexagonTop(hexCenter, radius);

    // copy hexagons
    var hexEl = hexToCopy.cloneNode(true);
    hexEl.setAttribute("href", "#hexagonId");
    hexEl.setAttribute("id", "hexId" + index);
    hexEl.setAttribute("x", hexTop.X);
    hexEl.setAttribute("y", hexTop.Y);

    // copy text
    var textEl = textToCopy.cloneNode(true);
    textEl.setAttribute("x", hexCenter.X + radius);
    textEl.setAttribute("y", hexCenter.Y);
    textEl.setAttribute("id", "textId" + index);


    var text = document.createTextNode(pascalNumber);
    textEl.appendChild(text);

    //add hexagons and text to dom tree
    hexToCopy.parentNode.parentNode.appendChild(hexEl);
    hexToCopy.parentNode.parentNode.appendChild(textEl);
}

function draw(idHex, idText){
    let numRows = getUrlParam("param1");
    var sPoint = {X: window.innerWidth/2, Y: 0};
    var hexRadius = 30;
    var currentHexCenter = {X: 0, Y: 0};
    var startHexElem = document.getElementById(idHex); // hidden 'use' element for folowing copying
    var startTextElem = document.getElementById(idText); // hidden 'text' element for folowing copying
    var pascalNumbers = generatePascalTriangle(numRows); // generate Pascal Numbers

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds)); // variable for delay drawing
    };

    const doSomething = async () => {
        var k = 0;
        for(let i = 1; i <= numRows; i++){
            await sleep(500);
            var centerPoints = hexagonCenters(sPoint, hexRadius, i); // count hexagon centers in a row
            var pointsAmount = centerPoints.length;
            for(let j = 0; j < pointsAmount; j++){
                currentHexCenter = centerPoints[j];
                drawHexagon(currentHexCenter, hexRadius, k, startHexElem, startTextElem, pascalNumbers[i-1][j]);
                k++; 
            }
            sPoint = centerPoints[0];
            
        }
    }
    doSomething();
 }


// require helper.js
/************************************************************************
                        pascalTriangleGenerator.js
 ***********************************************************************/
function generatePascalTriangle(numRows) {
    function countPascalRow(arr){
        let arrLength = arr.length;
        let arrRow = [];
        arrRow[0] = 1;
        arrRow[arrLength] = 1;
        if(arrLength > 1){
            for(let i = 1; i < arrLength; i++){
                arrRow[i] = arr[i - 1] + arr[i];
            }
        }
        return arrRow;
    }
    let arrPascal = [];
    if(numRows > 0){
        arrPascal[0] = [1];
        for(let i = 1; i < numRows; i++){
            arrPascal[i] = countPascalRow(arrPascal[i - 1]);
        }
    }
    return arrPascal;
}

/***********************************************************************
Events
***********************************************************************/
function printPascalTriangle(id1,id2) {
    var numberOfRows = readNumberValue(id1);
    if(numberOfRows == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        document.getElementById("pacsalLinkId").style.cursor = "pointer";
        document.getElementById("pacsalLinkId").style.pointerEvents = "all";
        printArray(id2, generatePascalTriangle(numberOfRows));
}
// require helper.js
/************************************************************************
                        powerOfThreeDeterminer.js
 ***********************************************************************/
function isPowerOfThree(number){
    if(number < 1 || number > Number.MAX_SAFE_INTEGER|| !Number.isInteger(number))
        return false;
    
    while(number % 3 == 0){
        number /= 3;
    }

    if(number == 1)
        return true;
    else
        return false;

}

/***********************************************************************
Events
***********************************************************************/
function printPowerOfThreeresult(id1, id2){
    var userNumber = readNumberValue(id1);
    if (userNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else{
        var resultValue = isPowerOfThree(userNumber);

        if(resultValue == true)
            printStringValue(id2,"The number is power of three!");
        else 
            printStringValue(id2, "The number isn't power of three!");
    }
}
// require helper.js
// require primeNumberChecker.js
/************************************************************************
                        primeFactorsOfNumber.js
 ***********************************************************************/
function primeFactorsOfNumber(number){
    if(!Number.isInteger(number) || number < 2)
        return [];

    var primeFactorsArray = [];

    for(var i = 2; i <= number; i++){
        if(number % i == 0){
            if(primeNumberCheck_V1(i)){
                primeFactorsArray.push(i);
            }
        }
    }
    return primeFactorsArray;
}
/***********************************************************************
Events
***********************************************************************/
function printPrimeFactorsResult(id1, id2){
    var userNumber = readNumberValue(id1);
    if(userNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printArray(id2,primeFactorsOfNumber(userNumber));
}
// require helper.js
/************************************************************************
                        primeNumberChecker.js
 ***********************************************************************/
function primeNumberCheck_V1(number) {
    if(!Number.isInteger(number) || number < 2)
       return false;

    for(var i = 2; i <= Math.floor(Math.sqrt(number)); i++){
        if(number % i == 0)
            return false;
    }
    return true;
}

function primeNumberCheck_V2(number) {  
    if(!Number.isInteger(number) || number < 2)
        return false;
    
    var isPrimeArray = [];
    for(var i = 2; i <= number; i++){
        isPrimeArray[i] = true; 
    }

    for(var i = 2; i*i <= number; i++){
        if(isPrimeArray[i] == false){
            continue;
        }
        if(isPrimeArray[i]){
            for(var j = i*i; j <= number; j+=i)
                isPrimeArray[j] = false;
        }
    }
 
    return isPrimeArray[number];
};
/***********************************************************************
Events
***********************************************************************/
function printPrimeNumberCheckResult(id1, id2){
    var userNumber = readNumberValue(id1);
    if (userNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else{
        var resultValue = primeNumberCheck_V1(userNumber);

        if(resultValue == true)
            printStringValue(id2,"The number is prime!");
        else 
            printStringValue(id2, "The number isn't prime!");
    }

}

       

// require helper.js
// require primeNumberChecker.js
/************************************************************************
                        primeNumberCounter.js
 ***********************************************************************/
function primeNumbersCounter_V1(number){
    if(!Number.isInteger(number) || number < 2)
        return -1;

    var primeFactorsCount = 0;

    for(var i = 2; i < number; i++){
        if(primeNumberCheck_V1(i)){
            primeFactorsCount++;
        }
    }
    return primeFactorsCount;
}

function primeNumbersCounter_V2(number){
    if(!Number.isInteger(number) || number < 2)
        return -1;

    var primeNumbersCount = 0;
    var isPrimeArray = [];

    for(var i = 2; i < number; i++){
        isPrimeArray[i] = true; 
    }

    for(var i = 2; i*i < number; i++){
        if(isPrimeArray[i] == false){
            continue;
        }
        if(isPrimeArray[i]){
            for(var j = i*i; j < number; j+=i)
                isPrimeArray[j] = false;
        }
    }

    for(var i = 2; i < number; i++){
        if(isPrimeArray[i])
            primeNumbersCount++;
    }

    return primeNumbersCount;
}
/***********************************************************************
Events
***********************************************************************/
function printPrimeNumbersCounter(id1, id2){
    var userNumber = readNumberValue(id1);
    if(userNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printIntValue(id2,primeNumbersCounter_V1(userNumber));
}
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
// require helper.js
/************************************************************************
                        stringReverse.js
 ***********************************************************************/
function reverseString(str) {
    if(str == null )
        return "";

    var arrayStrElem = str.split("");
    var strLength = arrayStrElem.length;

    for(var i = 0; i < strLength; i++){
        arrayStrElem[i] = str.charAt(strLength-i-1);
    }

    return arrayStrElem.join("");
}

/***********************************************************************
Events
***********************************************************************/

function printReversedStringResult(id1, id2){
    var userStr = readStringValue(id1);
    if(userStr == "")
        alert("Please, enter a string!");
    else
        printStringValue(id2, reverseString(userStr));
}

/************************************************************************
                        tabsSwitcher.js
 ***********************************************************************/
function toggleObjectVisibility(elementId, isVisible){
	var obj = document.getElementById(elementId);
	
	if (obj == null)
		return;

	if (isVisible)
		obj.className = obj.className.replace('_hidden', '_visible');
	else
		obj.className = obj.className.replace('_visible', '_hidden');
}

function hideAllTabs() {
	toggleObjectVisibility("tabChars", false);   
	toggleObjectVisibility("tabStrings", false);  
	toggleObjectVisibility("tabArrays", false); 
	/*var mainObj = document.getElementsByTagName("main");
	var tabs = mainObj[0].getElementsByTagName("div");
	for (var tab in tabs){
		if (isVisible)
			tab.className = tab.className.replace('_hidden', '_visible');
		else
			tab.className = tab.className.replace('_visible', '_hidden');
	}*/
}

/***********************************************************************
Events
***********************************************************************/
function onTabClick(senderId){
	hideAllTabs();
	toggleObjectVisibility(senderId, true);
	toggleObjectVisibility("nonexistantobject", true);
}

// require helper.js
/************************************************************************
                        totalZerosCounter.js
 ***********************************************************************/
function countZeros(numberN) {
    if(!Number.isInteger(numberN) || numberN < 1 || !Number.isSafeInteger(numberN))
        return -1;

    var countOfZeros = 0;

    while(numberN > 0){
        if(numberN % 10 == 0){
            countOfZeros++;
        }
        numberN = Math.floor(numberN /= 10);
    }
    return countOfZeros;
}

/***********************************************************************
Events
***********************************************************************/

function printZerosCountResult(id1, id2) {
    var userNum = readNumberValue(id1);
    if (userNum == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else
        printIntValue(id2, countZeros(userNum));
}

// require helper.js
/************************************************************************
                        twoSortedArraysMerge.js
 ***********************************************************************/
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

/***********************************************************************
Events
***********************************************************************/
function printMergedArray(id1, id2, id3) {
    var userArray1 = readArray(id1);
    var userArray2 = readArray(id2);
    if(userArray1.length <= 0 || userArray2 <= 0)
        alert("An array is empty or an object is not defined!");
    else
        printArray(id3, mergeSortedArrays(userArray1, userArray2));
}
 // require helper.js
 // require primeNumberChecker.js
 /************************************************************************
                        uglyNumbersDeterminer.js
 ***********************************************************************/
 function isNumberUgly_V1(number) {
    if(number <= 0 || number > Number.MAX_SAFE_INTEGER || !Number.isSafeInteger(number))
        return false; 

    if(number == 1)
        return true;
    
    for(var i = 2; i <= number; i++){
        if(number % i == 0){
            if(primeNumberCheck_V1(i))
                if(i >= 7)
                    return false;
                else
                    continue;
        }
    }

    return true;
}

function isNumberUgly_V2(number) {
    if(number <= 0 || number > Number.MAX_SAFE_INTEGER || !Number.isSafeInteger(number))
        return false; 

    if(number == 1)
        return true;

    while(number != 1){
        if(number % 2 == 0)
            number /= 2;
        else if(number % 3 == 0)
                number /= 3;
            else if(number % 5 == 0)
                    number /= 5;
                else
                    return false;
    }

    return true;
}
// function isNumberUgly_V3(number) {
//     if(number <= 0 || number > Number.MAX_SAFE_INTEGER || !Number.isSafeInteger(number))
//         return false; ///????????

//     if(number == 1)
//         return true;

//     var isUgly = false;
//     if(number % 2 != 0 && number % 3 != 0 && number % 5 != 0)
//         return false;
//     else{ 
//         for(var i = 2; i <= number; i++){
//             if(number % i == 0){
//                 if(i < 6)
//                     isUgly = true;
//                 else
//                     break;
//             }
//         }
//     }
//     return isUgly;
// }

/***********************************************************************
Events
***********************************************************************/
function printisNumberUglyResult(id1, id2){
    var userNumber = readNumberValue(id1);
    if (userNumber == -1)
        alert("The number is invalid! Please, enter the correct number!");
    else{
        var resultValue = isNumberUgly_V2(userNumber);

        if(resultValue)
            printStringValue(id2,"The number is ugly number!");
        else 
            printStringValue(id2, "The number isn't ugly number!");
    }

}
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
// require helper.js
/************************************************************************
                        uniqueStringCharactersCheck.js
 ***********************************************************************/
function isStringConsistOfUniqueCharacters(userString) {
    if(userString == null)
        return false;

    if(userString === "")
        return true;

    var sortedArray = userString.split("").sort();

    for(var i = 0; i < sortedArray.length - 1; i++){
        if(sortedArray[i] == sortedArray[i+1])
            return false;
    }
    return true;
}

/***********************************************************************
Events
***********************************************************************/

function printUniqueCharactersResult(id1, id2){
    var userStr = readStringValue(id1);
    if(userStr === "")
        alert("Please, enter a string!");
    else if(isStringConsistOfUniqueCharacters(userStr))
        printStringValue(id2,"The string has all unique characters!");
    else
        printStringValue(id2,"The string has repeating characters!");   
}
