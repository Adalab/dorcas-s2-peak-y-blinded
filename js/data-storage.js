'use strict';
console.log('hola');
//
var data = {};
var dataStorageRetrieved = [];

console.log(data);

var inputStorage = document.querySelectorAll('.input__storage');

function useDataStorage(inputStorageName, inputStorageValue) {
  console.log('recuperando localStorage');
  console.log('dentrouseData name', inputStorageName);
  console.log('dentrouseData value', inputStorageValue);

  //Recupero los datos de localStorage y los guardo en una variable
  var dataStorageRetrieved = JSON.parse(localStorage.getItem('formData'));
  console.log('recuperando formData', dataStorageRetrieved);

  //Introduzco los datos recuperador en el objeto 'data'

  inputStorageValue = dataStorageRetrieved[inputStorageName];
  data[inputStorageName] = inputStorageValue;
  console.log('data', data);

  

  // inputStorage.innerHTML = inputStorageValue;
  // console.log ('inner input',inputStorage.innerHTML);

}

function saveDataStorage(event) {
  //Variable para actual nombre del imput y valor del input
  var currentInput = event.currentTarget;
  console.log('current value', currentInput.value);
  console.log('current name', currentInput.name);
  var currentInputName = currentInput.name;
  var currentInputValue = currentInput.value;

  //Guardo los datos dentro del objeto 'data'
  data[currentInputName] = currentInputValue;
  console.log('array data', data);

  //Guardo datos individualmente y tambien como objeto 'data' que convierto en cadena
  localStorage.setItem(currentInputName,currentInputValue);
  localStorage.setItem('formData',JSON.stringify(data));
}

// console.log('datos guardados', useDataStorage());

for (var i = 0; i < inputStorage.length; i++ ){
  var inputStorageName = inputStorage[i].name;
  var inputStorageValue = inputStorage[i].value;
  // console.log('name',inputStorageName );
  // console.log('value',inputStorageValue);
  // console.log('default value',inputStorage[i].defaultValue);
  useDataStorage(inputStorageName, inputStorageValue);
  console.log( 'value despues funcion', inputStorage[i].value);
  console.log('despues funcion', inputStorage);
  inputStorage[i].addEventListener('change',saveDataStorage);
}
console.log('inputStorage al final del todo', inputStorage);
