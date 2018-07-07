'use strict';

//Apuntar al padre de Select, el div
var parentSelect = document.querySelector('.js__select-container');

//Declaracione de variables de select y su contenido

var newSelect = document.createElement('select');
var newOption = document.createElement('option');
var optionContent = document.createTextNode('HTML');

//Declaraciones variables boton más div que lo contiene

var newSelectButton = document.createElement('div');
var newSelectButtonContent = document.createElement('i');

console.log(newSelect);
console.log(newOption);

//Insercion contenido en option, e insercion de option como contenido de select. Insercion de select dentro del div que es su padre

newOption.appendChild(optionContent);
newSelect.appendChild(newOption);
parentSelect.appendChild(newSelect);

newSelect.classList.add('item__select');

//Insercion clase font-awesome en <i>, insercion <i> en <div>
newSelectButtonContent.classList.add('fas');
newSelectButtonContent.classList.add('fa-plus');
newSelectButton.appendChild(newSelectButtonContent);
newSelectButton.classList.add('item__select-button');
parentSelect.appendChild(newSelectButton);
console.log(newSelectButton);
