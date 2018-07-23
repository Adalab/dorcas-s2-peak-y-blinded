'use strict';

let data = {};
let dataStorageRetrieved = [];


// var fr = new FileReader();

const inputStorage = document.querySelectorAll('.input__storage');

//Recupero los datos de localStorage y los guardo en una variable

const restoreDataForPreview = (dataStorageRetrieved) => {

  document.querySelector('#element-name').innerText = dataStorageRetrieved.name;
  document.querySelector('#element-role').innerText = dataStorageRetrieved.job;
  document.querySelector('#element-mail').href = 'mailto:' + dataStorageRetrieved.email;
  document.querySelector('#element-tel').href = 'tel:' + dataStorageRetrieved.phone;
  document.querySelector('#element-lin').href = 'https://linkedin.com/in/' + dataStorageRetrieved.linkedin;
  document.querySelector('#element-gh').href = 'https://github.com/' + dataStorageRetrieved.github;
  document.querySelector('.personal-image').src = dataStorageRetrieved.photo;

  const cardPreview = document.querySelector('#card');

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
//Función para recuperar datos almacenados en localStorage
const useDataStorage = (inputStorageName, inputStorageValue, inputStoragePosition) => {
  console.log('recuperando localStorage');
  dataStorageRetrieved = JSON.parse(localStorage.getItem('jsonToSend'));
  console.dir(dataStorageRetrieved);
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
        const miniImage = document.querySelector('.item-preview__img');
        miniImage.src = dataStorageRetrieved.photo;
      } else{
        inputStoragePosition.value = data[inputStorageName];
      }
    }
  }
}

const saveDataStorage = (event) => {
  //Variable para actual nombre del input y valor del input
  const currentInput = event.currentTarget;
  const currentInputName = currentInput.name;
  const currentInputValue = currentInput.value;

  if(currentInput.type === 'file'){
    const miniImage = document.querySelector('.item-preview__img');
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

//Bucle para recorrer los elementos input del formulario, es decir, los radiobuttons, inputs del formulario y skills. Todos esos elementos tienen la clase .input___storage.
//De los elementos cojo su índice (dataStorage), su nombre (dataStorage.name) y su valor (dataStorage.value).
//Una vez recorrido un elemento, hago una función que recupera los datos del local storage si los hay (useDataStorage).
for (const data of inputStorage){
  const inputStoragePosition = data;
  const inputStorageName = data.name;
  const inputStorageValue = data.value;
  useDataStorage(inputStorageName, inputStorageValue, inputStoragePosition);
  data.addEventListener('change',saveDataStorage);
}


// for (const dataStorage of inputStorage){
//   dataStorage.addEventListener('change',saveDataStorage);
// }




