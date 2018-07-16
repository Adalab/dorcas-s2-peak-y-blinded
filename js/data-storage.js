'use strict';
console.log('hola');

var data = {};
var dataStorageRetrieved = [];

console.log(data);

var fr = new FileReader();

var inputStorage = document.querySelectorAll('.input__storage');
var photoPreviewDiv = document.querySelector('.item-preview__img');

//Función para recuperar datos almacenados en localStorage
function useDataStorage(inputStorageName, inputStorageValue, inputStoragePosition) {
  console.log('recuperando localStorage');

  //Recupero los datos de localStorage y los guardo en una variable
  dataStorageRetrieved = JSON.parse(localStorage.getItem('jsonToSend'));
  document.querySelector('#element-name').innerText = dataStorageRetrieved.name;
  document.querySelector('#element-role').innerText = dataStorageRetrieved.job;
  document.querySelector('#element-mail').href = 'mailto:' + dataStorageRetrieved.email;
  document.querySelector('#element-tel').href = 'tel:' + dataStorageRetrieved.phone;
  document.querySelector('#element-lin').href = 'https://linkedin.com/in/' + dataStorageRetrieved.linkedin;
  document.querySelector('#element-gh').href = 'https://github.com/' + dataStorageRetrieved.github;
  document.querySelector('.personal-image').src = dataStorageRetrieved.photo;
  var cardPreview = document.querySelector('#card');
console.log('paleta', dataStorageRetrieved.palette);
  if (dataStorageRetrieved.palette === 1) {
    cardPreview.classList.add('paleta-azul');
  } else if (dataStorageRetrieved.palette === 2) {
    cardPreview.classList.remove('paleta-azul');
    cardPreview.classList.add('paleta-roja');
  } else if (dataStorageRetrieved.palette === 3) {
    cardPreview.classList.remove('paleta-azul');
    cardPreview.classList.add('paleta-gris');
  }

  //Miro que el localStorage no esté vacio
  if(dataStorageRetrieved !== null){
  //Creo una acción por si hay campos vacios
    if(dataStorageRetrieved[inputStorageName] === undefined){
      console.log('dentro if null', dataStorageRetrieved[inputStorageName]);
      inputStorageName = '';
    }else {
      //Introduzco los datos recuperador en el objeto 'data'
      inputStorageValue = dataStorageRetrieved[inputStorageName];
      data[inputStorageName] = inputStorageValue;
      console.log('data', data);

      if(inputStoragePosition.type === 'radio' && inputStoragePosition.value === data[inputStorageName] ){
        //Condicion si los inputs son tipo radio
        console.log('inputStoragePosition.type', inputStoragePosition.type);
        console.log('inputStoragePosition.value', inputStoragePosition.value);
        console.log('data[inputStorageName]', data[inputStorageName]);
        inputStoragePosition.checked = true;
      } else if(inputStoragePosition.type === 'file'){
        //Para la foto
        var miniImage = document.querySelector('.item-preview__img');
        miniImage.src = dataStorageRetrieved.photo;
      } else{
        inputStoragePosition.value = data[inputStorageName];
        console.log('inputStoragePosition.value', inputStoragePosition.value);
        console.log('data[inputStorageName]', data[inputStorageName]);
      }
    }
  }
}

function saveImgInLocaStorage (currentInputName){
  data[currentInputName] = fr.result;
  console.log('img in array',  data[currentInputName]);
}

function saveDataStorage(event) {
  //Variable para actual nombre del input y valor del input
  var currentInput = event.currentTarget;
  console.log('current value', currentInput.value);
  console.log('current name', currentInput.name);
  var currentInputName = currentInput.name;
  var currentInputValue = currentInput.value;
  console.log('value y name',currentInputValue,currentInputName);
  if(currentInput.type === 'file'){
    // var myFile = document.querySelector('#image').files[0];
    // var imgInArray = data[currentInputName];
    // console.log('currentInputName;',currentInputName);
    // console.log('imgInArray',imgInArray);
    // fr.addEventListener('load', saveImgInLocaStorage(currentInputName));
    var miniImage = document.querySelector('.item-preview__img');
    data[currentInputName] = miniImage.src;
    console.log('mini', miniImage.src);

  } else if (currentInput.type === 'radio'&& currentInput.checked === true){
    console.log('esta checked', currentInput.checked);
    data[currentInputName] = currentInputValue;
    console.log( 'currentInputValue', currentInputValue);
    console.log( 'data[currentInputName]', data[currentInputName]);
    localStorage.setItem(currentInputName,currentInputValue);
  }else {
    console.log( 'currentInputValue', currentInputValue);
    console.log( 'ddata.currentInputName ', (data[currentInputName]) );
    //Guardo los datos dentro del objeto 'data'
    data[currentInputName] = currentInputValue;
    localStorage.setItem(currentInputName,currentInputValue);
  }

  console.log('array data', data);

  //Guardo datos individualmente y tambien como objeto 'data' que convierto en cadena
  // localStorage.setItem(currentInputName,currentInputValue);
  localStorage.setItem('formData',JSON.stringify(data));
}


for (var i = 0; i < inputStorage.length; i++ ){
  var inputStoragePosition = inputStorage[i];
  var inputStorageName = inputStorage[i].name;
  var inputStorageValue = inputStorage[i].value;
  console.log('input position',inputStoragePosition);
  useDataStorage(inputStorageName, inputStorageValue, inputStoragePosition);

  //
  // inputStorage[i].addEventListener('change',saveDataStorage);
}
for (var j = 0; j < inputStorage.length; j++ ){
  inputStorage[j].addEventListener('change',saveDataStorage);
}
console.log('inputStorage al final del todo', inputStorage);
