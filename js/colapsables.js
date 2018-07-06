'use strict';

var dropDown = document.querySelectorAll('.js__dropdown');

var dropDownTitle = document.querySelectorAll('.js__dropdown-title');

var arrow = document.querySelectorAll('.arrow');

function refreshDropDown(event) {
  var parent = event.currentTarget.parentElement;
  // var arrowSpan = event.currentTarget.children[1];
  // var arrowAsChild = arrowSpan.children;
  var arrowAsChild = event.currentTarget.children[1];

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

function closeAllDropDown() {
  for (var i = 0; i < dropDown.length; i++) {
    dropDown[i].classList.remove('visible');
    arrow[i].classList.remove('fa-angle-up');
    arrow[i].classList.add('fa-angle-down');
  }
}

for (var j = 0; j < dropDownTitle.length; j++) {
  dropDownTitle[j].addEventListener('click', refreshDropDown);
}
