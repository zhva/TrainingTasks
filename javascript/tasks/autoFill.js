function autoFillNumber(elemId) {
  const obj = document.getElementById(elemId);
  obj.value = Math.floor(Math.random() * 10000) + 1;
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

function autoFillArray(elemId) {
  const randomArray = [];
  const arrayLength = Math.floor(Math.random() * 8) + 1;
  for (let i = 0; i < arrayLength; i++) {
    randomArray[i] = Math.floor(Math.random() * 100) + 1;
  }
  const obj = document.getElementById(elemId);
  obj.value = randomArray.join(' ');
}
