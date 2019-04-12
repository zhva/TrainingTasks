/* requires:
    tabsSwitcher.js
*/

function onFilterElementClick(event, siblingElements) {
  const dataType = this.getAttribute('data-type');
  filterSelection(dataType);

  for (let j = 0; j < siblingElements.length; j++) {
    siblingElements[j].classList.remove('active');
  }
  this.classList.add('active');
}

function onPageLoad() {
  const containerTypesFilters = document.getElementById('typesListId');
  const containerComplexityFilters = document.getElementById('complexityListId');
  const containerTagsFilters = document.getElementById('tagsListId');

  const elementsTypesFilterValue = containerTypesFilters.getElementsByClassName('side_menu_list_item');
  const elementsComplexityFilterValue = containerComplexityFilters.getElementsByClassName('side_menu_list_item');
  const elementsTagsFilterValue = containerTagsFilters.getElementsByClassName('side_menu_list_item');

  // adding event handlers
  for (let i = 0; i < elementsTypesFilterValue.length; i++) {
    elementsTypesFilterValue[i].addEventListener('click', (event) => { onFilterElementClick(event, elementsTypesFilterValue); }, true);
  }

  for (let i = 0; i < elementsComplexityFilterValue.length; i++) {
    elementsComplexityFilterValue[i].addEventListener('click', (event) => { onFilterElementClick(event, elementsComplexityFilterValue); }, true);
  }

  // elementsTagsFilterValue.forEach((element) => {
  //   element.addEventListener('click', onFilterElementClick(elementsTagsFilterValue));
  // });

  // default filtering
  filterSelection('all');
}
