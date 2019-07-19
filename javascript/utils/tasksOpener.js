//---------------------------------------------------------------------------
//                        taskOpener.js
//---------------------------------------------------------------------------
function toggleTaskVisibility(elementId1, elementId2) {
  const taskNameObj = document.getElementById(elementId1);
  const taskBodyObj = document.getElementById(elementId2);

  if (taskNameObj == null) {
    return;
  }

  if (taskNameObj.classList.contains('task_body_button_down')) {
    taskNameObj.classList.remove('task_body_button_down');
    taskNameObj.classList.add('task_body_button_up');
    taskBodyObj.classList.remove('task_body_up');
  }
  else {
    taskNameObj.classList.remove('task_body_button_up');
    taskNameObj.classList.add('task_body_button_down');
    taskBodyObj.classList.add('task_body_up');
  }
}
