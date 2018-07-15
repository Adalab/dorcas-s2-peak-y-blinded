'use strict';
console.log('hola');
//
var data = {};

console.log(data);

var inputStorage = document.querySelectorAll('.input__storage');

// function useDataStorage() {
//   var dataInStorageName = localStorage.getItem(event.currentTarget.name);
//   var dataInStorageValue = localStorage.getItem(event.currentTarget.value);
//   console.log(event.currentTarget.name);
//   console.log('use data', event.currentTarget.dataInStorageValue);
//   event.currentTarget.value = data.dataInStorageValue;
//   console.log('use data', event.currentTarget.value);
// }

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


for (var i = 0; i < inputStorage.length; i++ ){
  // inputStorage[i].addEventListener('click',useDataStorage);
  inputStorage[i].addEventListener('change',saveDataStorage);
}
