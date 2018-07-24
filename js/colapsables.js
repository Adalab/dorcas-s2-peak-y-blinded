'use strict';

const dropDown = document.querySelectorAll('.js__dropdown');

const dropDownTitle = document.querySelectorAll('.js__dropdown-title');

const refreshDropDown = event => {
  const parent = event.currentTarget.parentElement;
  // var arrowSpan = event.currentTarget.children[1];
  // var arrowAsChild = arrowSpan.children;
  const arrowAsChild = event.currentTarget.children[1];

  if (parent.classList.contains('visible')) {
    parent.classList.remove('visible');

    arrowAsChild.classList.remove('fa-angle-up');
    arrowAsChild.classList.add('fa-angle-down');

  } else {
    closeAllDropDown();
    parent.classList.add('visible');

    arrowAsChild.classList.remove('fa-angle-down');
    arrowAsChild.classList.add('fa-angle-up');

  }
}

const closeAllDropDown = () => {
  for(const dropD of dropDown){
    dropD.classList.remove('visible');
    const dropArrow = document.querySelector('.arrow');
    dropArrow.classList.remove('fa-angle-up');
    dropArrow.classList.add('fa-angle-down');
  }
};

for(const title of dropDownTitle) {
  title.addEventListener('click', refreshDropDown);
};
