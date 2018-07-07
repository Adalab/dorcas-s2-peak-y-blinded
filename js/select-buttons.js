'use strict';

function addContentToHtml() {
  //Apuntar al padre de Select, el div
  var parentDivSelect = document.querySelector('.js__select-container');

  //Declaracione de variables de select y su contenido
  var newParentSelect = document.createElement('div');
  var newSelect = document.createElement('select');
  var newOption = document.createElement('option');
  var optionContent = document.createTextNode('HTML');

  //Declaraciones variables boton más div que lo contiene

  var newSelectButton = document.createElement('div');
  var newSelectButtonContent = document.createElement('i');

  for (var i = 0; i < 3; i++) {
    //Insercion contenido en option, e insercion de option como contenido de select. Insercion de select dentro del div que es su padre
    newOption.appendChild(optionContent);
    newSelect.appendChild(newOption);
    newParentSelect.appendChild(newSelect);
    parentDivSelect.appendChild(newParentSelect);

    newParentSelect.classList.add('item__select-container');
    newSelect.classList.add('item__select');

    //Insercion clase font-awesome en <i>, insercion <i> en <div>
    newSelectButtonContent.classList.add('fas');
    newSelectButtonContent.classList.add('fa-plus');
    newSelectButton.appendChild(newSelectButtonContent);
    newSelectButton.classList.add('item__select-button');
    newParentSelect.appendChild(newSelectButton);
    newSelectButton.addEventListener('click', addSelect);
  }

}

addContentToHtml();

function addSelect() {

  addContentToHtml();

}


