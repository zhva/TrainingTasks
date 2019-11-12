function startPerspective(event, blockWrapperId, blockId) {
  const blockWrapper = document.getElementById(blockWrapperId);
  const blockWrapperHeight = blockWrapper.getBoundingClientRect().height;
  const block = document.getElementById(blockId);
  const blockTop = block.getBoundingClientRect().top;
  const blockHeight = block.getBoundingClientRect().height;
  const mousePosY = event.clientY;
  let rotDelta = 7;


  block.style.transition = 'all 0.2s';
  block.style.transform = 'rotateX(0deg)';
  if (mousePosY >= blockTop + blockHeight / 2) {
    rotDelta = 0 - rotDelta;
  }
  block.style.transform = `rotateX(${rotDelta}deg)`;

  blockWrapper.style.perspective = `${(15 * blockWrapperHeight).toString()}px`;
}

function stopPerspective(blockWrapperId, blockId) {
  document.getElementById(blockId).style.transform = 'rotateX(0deg)';
  document.getElementById(blockWrapperId).style.perspective = '0px';
}
