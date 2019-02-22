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

