/* requires:
    tabsSwitcher.js
*/
//---------------------------------------------------------------------------
let ACTIVE_TOPICS = [];
let ACTIVE_COMPLEXITY = [];
let ACTIVE_TAGS = [];

const FilterType = {
  TOPIC: Symbol('Topic'),
  COMPLEXITY: Symbol('Complexity'),
  TAGS: Symbol('Tags'),
};

const CombinationType = {
  EXCLUSIVE: Symbol('Exclusive'),
  INCLUSIVE: Symbol('Inclusive'),
};

function filter() {
  const tasks = document.getElementsByClassName('task_element');

  // TODO: create a map tasksVisibilty <taskId, boolean>
  const taskKey = { ID: '', VISIBILITY: true };
  const tasksVisibility = new Map();

  for (let iTask = 0; iTask < tasks.length; iTask++) {
    // TODO: generate a map of task ids
    taskKey.ID = tasks[iTask].id;
    taskKey.VISIBILITY = true;
    // TODO: fill tasksVisibilty with true
    tasksVisibility.set(taskKey.ID, taskKey.VISIBILITY);
  }
  function setTasksVisibility(tasksArray, ACTIVE_RUBRIC, tasksVisibilityArray, combinationType) {
    for (let iTask = 0; iTask < tasksArray.length; iTask++) {
      const currentTask = tasksArray[iTask];
      // TODO: if current taskId in tasksVisibilty is set to false -> continue
      if (tasksVisibilityArray.get(currentTask.id) === false) {
        // eslint-disable-next-line no-continue
        continue;
      }
      switch (combinationType) {
        case CombinationType.EXCLUSIVE:
          for (let iTopic = 0; iTopic < ACTIVE_RUBRIC.length; iTopic++) {
            if (currentTask.classList.contains(ACTIVE_RUBRIC[iTopic]) === false) {
              // TODO: set the corresponding value in tasksVisibilty to false
              tasksVisibilityArray.set(currentTask.id, false);
              break;
            }
          }
          break;
        case CombinationType.INCLUSIVE: {
          let shouldBeShown = (ACTIVE_RUBRIC.length === 0);
          for (let iTopic = 0; iTopic < ACTIVE_RUBRIC.length; iTopic++) {
            if (currentTask.classList.contains(ACTIVE_RUBRIC[iTopic]) === true) {
              shouldBeShown = true;
            }
          }
          tasksVisibilityArray.set(currentTask.id, shouldBeShown);
          break;
        }
        default:
          break;
      }
    }
  }

  setTasksVisibility(tasks, ACTIVE_TOPICS, tasksVisibility, CombinationType.EXCLUSIVE);
  setTasksVisibility(tasks, ACTIVE_COMPLEXITY, tasksVisibility, CombinationType.EXCLUSIVE);
  setTasksVisibility(tasks, ACTIVE_TAGS, tasksVisibility, CombinationType.INCLUSIVE);

  // TODO: iterate over tasksVisibilty and set visibility to controls
  for (let iTask = 0; iTask < tasks.length; iTask++) {
    const currentTask = tasks[iTask];
    if (tasksVisibility.get(currentTask.id) === true) {
      tasks[iTask].classList.add('items_show');
    }
    else {
      tasks[iTask].classList.remove('items_show');
    }
  }
}

function updateFiltersMenu(clickedElement, siblingElements, isMultiSelectOn = false) {
  if (isMultiSelectOn)
  {
    if (clickedElement.classList.contains('active')) {
      clickedElement.classList.remove('active');
    }
    else {
      clickedElement.classList.add('active');
    }
  }
  else
  {
    for (let j = 0; j < siblingElements.length; j++) {
      siblingElements[j].classList.remove('active');
    }
    clickedElement.classList.add('active');
  }
}

function onFilterElementClick(event, siblingElements, filterType) {
  const dataType = event.currentTarget.getAttribute('data-type');

  switch (filterType) {
    case FilterType.TOPIC:
      // TODO: сlear ACTIVE_TOPICS
      ACTIVE_TOPICS.splice(ACTIVE_TOPICS.indexOf(dataType), 1);
      // TODO: add dataType to ACTIVE_TOPICS
      ACTIVE_TOPICS.push(dataType);
      break;
    case FilterType.COMPLEXITY:
      // TODO: сlear ACTIVE_COMPLEXITY
      ACTIVE_COMPLEXITY.splice(ACTIVE_COMPLEXITY.indexOf(dataType), 1);
      // TODO: add dataType to ACTIVE_COMPLEXITY
      ACTIVE_COMPLEXITY.push(dataType);
      break;
    case FilterType.TAGS:
      // TODO: clear ACTIVE_TOPICS and ACTIVE_COMPLEXITY
      if (ACTIVE_TAGS.includes(dataType)) {
        // TODO: remove dataType
        ACTIVE_TAGS.splice(ACTIVE_TAGS.indexOf(dataType), 1);
      }
      else
      {
        // TODO: add dataType
        ACTIVE_TAGS.push(dataType);
      }
      break;
    default:
      break;
  }

  filter();

  updateFiltersMenu(event.currentTarget, siblingElements, filterType === FilterType.TAGS);
}

function onClearFilter(siblingElements, filterType) {
  switch (filterType) {
    case FilterType.TOPIC:
      ACTIVE_TOPICS = [];
      break;
    case FilterType.COMPLEXITY:
      ACTIVE_COMPLEXITY = [];
      break;
    case FilterType.TAGS:
      ACTIVE_TAGS = [];
      break;
    default:
      break;
  }

  filter();

  // clear all active selections on the menu
  for (let j = 0; j < siblingElements.length; j++) {
    siblingElements[j].classList.remove('active');
  }
}

function onPageLoad() {
  const containerTypesFilters = document.getElementById('typesListId');
  const containerComplexityFilters = document.getElementById('complexityListId');
  const containerTagsFilters = document.getElementById('tagsListId');

  const btnTopicFilters = containerTypesFilters.getElementsByClassName('side_menu_list_item');
  const btnComplexityFilters = containerComplexityFilters.getElementsByClassName('side_menu_list_item');
  const btnTagFilters = containerTagsFilters.getElementsByClassName('side_menu_list_item');

  const btnClearTopicFilter = document.getElementById('topicSelectionDeleteId'); // TODO: add id for tpicDeleteButton
  const btnClearComplexcityFilter = document.getElementById('complexcitySelectionDeleteId'); // TODO: add id for comlexcityDeleteButton
  const btnClearTagscFilter = document.getElementById('tagsSelectionDeleteId'); // TODO: add id for tagDeleteButton

  // adding event handlers
  for (let i = 0; i < btnTopicFilters.length; i++) {
    btnTopicFilters[i].addEventListener('click', (event) => {
      onFilterElementClick(event, btnTopicFilters, FilterType.TOPIC);
    });
  }
  // TODO: add clear button click handler
  btnClearTopicFilter.addEventListener('click', () => {
    onClearFilter(btnTopicFilters, FilterType.TOPIC);
  });

  for (let i = 0; i < btnComplexityFilters.length; i++) {
    btnComplexityFilters[i].addEventListener('click', (event) => {
      onFilterElementClick(event, btnComplexityFilters, FilterType.COMPLEXITY);
    });
  }
  // TODO: add clear button click handler
  btnClearComplexcityFilter.addEventListener('click', () => {
    onClearFilter(btnComplexityFilters, FilterType.COMPLEXITY);
  });

  for (let i = 0; i < btnTagFilters.length; i++) {
    btnTagFilters[i].addEventListener('click', (event) => {
      onFilterElementClick(event, btnTagFilters, FilterType.TAGS);
    });
  }
  // TODO: add clear button click handler
  btnClearTagscFilter.addEventListener('click', () => {
    onClearFilter(btnClearTagscFilter, FilterType.TAGS);
  });
}
