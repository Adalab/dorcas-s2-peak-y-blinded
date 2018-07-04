'use strict';

var dropDown = document.querySelectorAll('.js__dropdown');

var dropDownTitle = document.querySelectorAll('.js__dropdown-title');

function refreshDropDown(event) {
  var parent = event.currentTarget.parentElement;

  if (parent.classList.contains('visible')) {
    parent.classList.remove('visible');
  } else {
    closeAllDropDown();
    parent.classList.add('visible');
  }
}

function closeAllDropDown() {
  for (var i = 0; i < dropDown.length; i++) {
    dropDown[i].classList.remove('visible');
  }
}

for (var j = 0; j < dropDownTitle.length; j++) {
  dropDownTitle[j].addEventListener('click', refreshDropDown);
}