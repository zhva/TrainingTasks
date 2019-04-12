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
