'use strict';

var data = {};
var dataStorageRetrieved = [];

var inputStorage = document.querySelectorAll('.input__storage');

//Función para recuperar datos almacenados en localStorage
function useDataStorage(inputStorageName, inputStorageValue, inputStoragePosition) {
  console.log('recuperando localStorage');
  dataStorageRetrieved = JSON.parse(localStorage.getItem('jsonToSend'));
  restoreDataForPreview(dataStorageRetrieved);

  //Miro que el localStorage no esté vacio
  if(dataStorageRetrieved !== null){
  //Creo una acción por si hay campos vacios
    if(dataStorageRetrieved[inputStorageName] === undefined){
      inputStorageName = '';
    }else {
      //Introduzco los datos recuperador en el objeto 'data'
      inputStorageValue = dataStorageRetrieved[inputStorageName];
      data[inputStorageName] = inputStorageValue;

      if(inputStoragePosition.type === 'radio' && inputStoragePosition.value === data[inputStorageName] ){
        //Condicion si los inputs son tipo radio
        inputStoragePosition.checked = true;
      } else if(inputStoragePosition.type === 'file'){
        //Para la foto
        var miniImage = document.querySelector('.item-preview__img');
        miniImage.src = dataStorageRetrieved.photo;
      } else{
        inputStoragePosition.value = data[inputStorageName];
      }
    }
  }
}

function saveDataStorage(event) {
  //Variable para actual nombre del input y valor del input
  var currentInput = event.currentTarget;
  var currentInputName = currentInput.name;
  var currentInputValue = currentInput.value;

  if(currentInput.type === 'file'){
    var miniImage = document.querySelector('.item-preview__img');
    data[currentInputName] = miniImage.src;

  } else if (currentInput.type === 'radio' && currentInput.checked === true){
    data[currentInputName] = currentInputValue;
    // localStorage.setItem(currentInputName,currentInputValue);
  } else {
    //Guardo los datos dentro del objeto 'data'
    data[currentInputName] = currentInputValue;
    // localStorage.setItem(currentInputName,currentInputValue);
  }

  //Guardo datos individualmente y tambien como objeto 'data' que convierto en cadena
  // localStorage.setItem(currentInputName,currentInputValue);
  localStorage.setItem('formData',JSON.stringify(data));
}


for (var i = 0; i < inputStorage.length; i++ ){
  var inputStoragePosition = inputStorage[i];
  var inputStorageName = inputStorage[i].name;
  var inputStorageValue = inputStorage[i].value;
  useDataStorage(inputStorageName, inputStorageValue, inputStoragePosition);

  //
  // inputStorage[i].addEventListener('change',saveDataStorage);
}
for (var j = 0; j < inputStorage.length; j++ ){
  inputStorage[j].addEventListener('change',saveDataStorage);
}

//Recupero los datos de localStorage y los guardo en una variable

function restoreDataForPreview(dataStorageRetrieved) {

  document.querySelector('#element-name').innerText = dataStorageRetrieved.name;
  document.querySelector('#element-role').innerText = dataStorageRetrieved.job;
  document.querySelector('#element-mail').href = 'mailto:' + dataStorageRetrieved.email;
  document.querySelector('#element-tel').href = 'tel:' + dataStorageRetrieved.phone;
  document.querySelector('#element-lin').href = 'https://linkedin.com/in/' + dataStorageRetrieved.linkedin;
  document.querySelector('#element-gh').href = 'https://github.com/' + dataStorageRetrieved.github;
  document.querySelector('.personal-image').src = dataStorageRetrieved.photo;

  var cardPreview = document.querySelector('#card');
console.log(dataStorageRetrieved.palette);
  if (dataStorageRetrieved.palette === '1') {
    cardPreview.classList.remove('paleta-azul', 'paleta-roja', 'paleta-gris');
    cardPreview.classList.add('paleta-azul');
  } else if (dataStorageRetrieved.palette === '2') {
    cardPreview.classList.remove('paleta-azul', 'paleta-roja', 'paleta-gris');
    cardPreview.classList.add('paleta-roja');
  } else if (dataStorageRetrieved.palette === '3') {
    cardPreview.classList.remove('paleta-azul', 'paleta-roja', 'paleta-gris');
    cardPreview.classList.add('paleta-gris');
  }

  if (dataStorageRetrieved.typography === '1') {
    cardPreview.classList.remove('font-card--comicsans', 'font-card--ubuntu', 'font-card--montserrat');
    cardPreview.classList.add('font-card--ubuntu');
  } else if (dataStorageRetrieved.typography === '2') {
    cardPreview.classList.remove('font-card--comicsans', 'font-card--ubuntu', 'font-card--montserrat');
    cardPreview.classList.add('font-card--comicsans');
  } else if (dataStorageRetrieved.typography === '3') {
    cardPreview.classList.remove('font-card--comicsans', 'font-card--ubuntu', 'font-card--montserrat');
    cardPreview.classList.add('font-card--montserrat');
  }
}
