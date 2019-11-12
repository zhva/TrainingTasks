function autoFillNumber(elemId, minV = 1, maxV = 10000) {
  const obj = document.getElementById(elemId);
  obj.value = Math.floor(minV + Math.random() * (maxV - minV + 1));
}

function autoFillString(elemId) {
  let randomStr = '';
  let randomAscii;
  const stringLength = Math.floor(Math.random() * 20) + 1;
  for (let i = 0; i < stringLength; i++) {
    randomAscii = Math.floor((Math.random() * 25) + 97);
    randomStr += String.fromCharCode(randomAscii);
  }
  const obj = document.getElementById(elemId);
  obj.value = randomStr;
}

function autoFillArray(elemId, minL = 4, maxL = 10) {
  const randomArray = [];
  const arrayLength = Math.floor(minL + Math.random() * (maxL - minL));
  for (let i = 0; i < arrayLength; i++) {
    randomArray[i] = Math.floor(Math.random() * 100);
  }
  const obj = document.getElementById(elemId);
  obj.value = randomArray.join(' ');
}
