// require helper.js
// require pascalTriangleGenerator.js
//---------------------------------------------------------------------------
//                        pascalTriangleDisplay.js
//---------------------------------------------------------------------------
function openPascalTriangle(url, param1) {
  const dir = window.location.href;
  const fullURL = new URL(url, dir);

  fullURL.searchParams.set('param1', param1);

  // httpGetAsync(fullURL, null);
  window.location.href = fullURL;
}

function getUrlParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}
//---------------------------------------------------------------------------
function hexagonCenters(prevFirstCenterPoint, radius, rowNumber) {
  const arrCenterPoints = [];
  arrCenterPoints[0] = { X: prevFirstCenterPoint.X - radius, Y: prevFirstCenterPoint.Y + 1.5 * radius };

  for (let i = 1; i < rowNumber; i++) {
    arrCenterPoints[i] = { X: arrCenterPoints[i - 1].X + 2 * radius, Y: arrCenterPoints[i - 1].Y };
  }

  return arrCenterPoints;
}

function hexagonTop(hexSenter, radius) {
  const hexTop = { X: hexSenter.X, Y: hexSenter.Y - radius };
  return hexTop;
}

function drawHexagon(hexCenter, radius, index, hexToCopy, textToCopy, pascalNumber) {
  const hexTop = hexagonTop(hexCenter, radius);

  // copy hexagons
  const hexEl = hexToCopy.cloneNode(true);
  hexEl.setAttribute('href', '#hexagonId');
  hexEl.setAttribute('id', `hexId${index}`);
  hexEl.setAttribute('x', hexTop.X);
  hexEl.setAttribute('y', hexTop.Y);

  // copy text
  const textEl = textToCopy.cloneNode(true);
  textEl.setAttribute('x', hexCenter.X + radius);
  textEl.setAttribute('y', hexCenter.Y);
  textEl.setAttribute('id', `textId${index}`);


  const text = document.createTextNode(pascalNumber);
  textEl.appendChild(text);

  // add hexagons and text to dom tree
  hexToCopy.parentNode.parentNode.appendChild(hexEl);
  hexToCopy.parentNode.parentNode.appendChild(textEl);
}

function draw(idHex, idText) {
  const numRows = getUrlParam('param1');
  let sPoint = { X: window.innerWidth / 2, Y: 0 };
  const hexRadius = 30;
  let currentHexCenter = { X: 0, Y: 0 };
  const startHexElem = document.getElementById(idHex); // hidden 'use' element for folowing copying
  const startTextElem = document.getElementById(idText); // hidden 'text' element for folowing copying
  const pascalNumbers = generatePascalTriangle(numRows); // generate Pascal Numbers

  const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds)); // variable for delay drawing

  const doSomething = async () => {
    let k = 0;
    for (let i = 1; i <= numRows; i++) {
      // eslint-disable-next-line no-await-in-loop
      await sleep(500);
      const centerPoints = hexagonCenters(sPoint, hexRadius, i); // count hexagon centers in a row
      const pointsAmount = centerPoints.length;
      for (let j = 0; j < pointsAmount; j++) {
        currentHexCenter = centerPoints[j];
        drawHexagon(currentHexCenter, hexRadius, k, startHexElem, startTextElem, pascalNumbers[i - 1][j]);
        k++;
      }
      sPoint = { X: centerPoints[0].X, Y: centerPoints[0].Y };
    }
  };
  doSomething();
}
