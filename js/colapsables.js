'use strict';

var dropDown = document.querySelectorAll('.js__dropDown');

var dropDownTitle = document.querySelectorAll('.js__dropDownTitle');

function refreshDropDown(event) {
  var parent = event.currentTarget.parentElement;
  
  if (parent.classList.contains('visible')) {
    parent.classList.remove('visible');  
  } else {
    closeAllDropDown();
    parent.classList.add('hidden');
  }
}

function closeAllDropDown() {
  for (var i = 0; i < dropDown.length; i++) {
    dropDown[i].classList.remove('visible');
  }
}

for (var i = 0; i < dropDownTitle.length; i++) {
  dropDownTitle[i].addEventListener('click', refreshDropDown);
}
