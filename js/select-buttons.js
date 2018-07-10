'use strict';
//userSelections para recoger en un array las selecciones del usuario
var userSelections = [];

//arrayOptions para crear las option del select
var arrayOptions = {};

fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
  .then(function(response){
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    arrayOptions = json.skills;
    //Llamada a la función que crea el contenido la primera vez
    addContentToHtml();
  });

//variables para eliminar los select
var parentDiv;
var parentSelect;

//función para crear y añadir contenido al html
function addContentToHtml() {
  //Apuntar al padre de Select, el div
  var parentDivSelect = document.querySelector('.js__select-container');

  //Declaraciones de variables de select y su contenido
  var newParentSelect = document.createElement('div');
  var newSelect = document.createElement('select');
  //var newOption = document.createElement('option');

  //Declaraciones variables boton más div que lo contiene

  var newSelectButton = document.createElement('div');
  var newSelectButtonContent = document.createElement('i');

  //Bucle que recorre el array de userSelections (+ 1 para que aparezca 1 ya pintado al cargar la página) y añade los grupos de contenido
  for (var i = 0; i < userSelections.length + 1; i++) {

    //Insercion contenido en option, e insercion de option como contenido de select. Insercion de select dentro del div que es su padre
    newParentSelect.appendChild(newSelect);
    parentDivSelect.appendChild(newParentSelect);

    newParentSelect.classList.add('item__select-container');
    newSelect.classList.add('item__select');
    newSelect.setAttribute('name', 'skills');

    //Insercion clase font-awesome en <i>, insercion <i> en <div>
    newSelectButtonContent.classList.add('fas', 'fa-plus', 'js__add');
    newSelectButton.appendChild(newSelectButtonContent);
    newSelectButton.classList.add('item__select-button');
    newParentSelect.appendChild(newSelectButton);
  }

  for (var j = 0; j < arrayOptions.length; j++) {
    var newOption = document.createElement('option');
    newOption.setAttribute('number', j);
    var optionContent = document.createTextNode(arrayOptions[j]);
    newOption.appendChild(optionContent);
    newSelect.appendChild(newOption);
    newOption.classList.add('js__option');
  }

  changeButton();
}

//función para cambiar el signo del botón dependiendo de las seleciones del usuario
function changeButton() {
  var button = document.querySelectorAll('.js__add');
  for (var i = 0; i < button.length; i++) {
    console.log('i = ' + i);

    button[i].setAttribute('number', i);

    if (userSelections.length === i) {
      button[i].classList.add('fa-plus');
      button[i].removeEventListener('click', removeSelect);
      button[i].addEventListener('click', addSelect);
    } else {
      button[i].classList.remove('fa-plus');
      button[i].classList.add('fa-minus');
      button[i].removeEventListener('click', addSelect);
      button[i].addEventListener('click', removeSelect);
    }
  }
  addContentToCard();
}

//Función para añadir el contenido (hasta que las selecciones del usuario sean 3) y cambiar el signo del último botón
function addSelect(event) {
  console.log('estoy poniendo');

  var clickedElement = event.currentTarget;
  var elementNumber = clickedElement.getAttribute('number');
  userSelections.push('option ' + elementNumber);
  console.log(userSelections);
  if (userSelections.length < 3) {
    addContentToHtml();
  } else if (userSelections.length === 3) {
    changeButton();
  }
}

//Función para quitar el contenido (de momento sólo quita el primer campo no el correspondiente al botón que se pincha)
function removeSelect(event) {
  console.log('estoy quitando');
  parentDiv = document.querySelector('.js__select-container');
  parentSelect = document.querySelector('.item__select-container');
  var clickedElement = event.currentTarget;
  var elementNumber = clickedElement.getAttribute('number');
  userSelections.splice(elementNumber, 1);
  console.log(userSelections);
  if (userSelections.length === 2) {
    changeButton();
  } else if (userSelections.length === 1) {
    parentDiv.removeChild(parentSelect);
    changeButton();
  } else if (userSelections.length === 0) {
    parentDiv.removeChild(parentSelect);
    changeButton();
  }
}

//VAriables para crear la lista de habilidades en la preview de la tarjeta y darle clases
var skills = document.querySelector('.skills');
var skillsList = document.createElement('ul');

skills.appendChild(skillsList);
skillsList.classList.add('skills__list', 'text__skills');

//Función para crear el contenido de las habilidades en la preview de la trajeta.
function addContentToCard() {
  var selects = document.getElementsByTagName('select');
  var newSkillsItem = document.querySelectorAll('.skills__item');

  for (var s = 0; s < newSkillsItem.length; s++) {
    var buttons = document.querySelectorAll('.js__add');
    skillsList.removeChild(newSkillsItem[s]);

  }
  console.log('user selections ', userSelections);

  for (var i = 0; i < userSelections.length; i++) {
    var optionContent = selects[i].value;
    var skillsItem = document.createElement('li');
    var skillsContent = document.createTextNode(optionContent);
    skillsItem.appendChild(skillsContent);
    skillsList.appendChild(skillsItem);
    skillsItem.classList.add('skills__item');
  }
}
