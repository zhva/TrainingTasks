//---------------------------------------------------------------------------
//                        tabsSwitcher.js
//---------------------------------------------------------------------------
function filterSelection(c) {
  let itemClass = c;
  const elem = document.getElementsByClassName('task_element');
  if (itemClass === 'all') {
    itemClass = '';
  }
  for (let i = 0; i < elem.length; i++) {
    elem[i].classList.remove('items_show');
    if (elem[i].className.indexOf(itemClass) > -1) {
      elem[i].classList.add('items_show');
    }
  }
}
//---------------------------------------------------------------------------
function tasksSerch(senderId) {
  const tasksList = document.getElementsByClassName('task_element');
  const serchText = document.getElementById(senderId).value.toUpperCase();

  for (let i = 0; i < tasksList.length; i++) {
    const taskName = tasksList[i].getElementsByClassName('task_name')[0].getElementsByTagName('h4');
    const taskBody = tasksList[i].getElementsByClassName('task_body')[0].getElementsByTagName('p');
    const taskNameValue = taskName[0].innerText.toUpperCase();
    const taskBodyValue = taskBody[0].innerText.toUpperCase();
    if (taskNameValue.indexOf(serchText) > -1 || taskBodyValue.indexOf(serchText) > -1) {
      tasksList[i].classList.add('items_show');
    } else {
      tasksList[i].classList.remove('items_show');
    }
  }
}
//---------------------------------------------------------------------------
