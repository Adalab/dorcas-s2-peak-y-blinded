'use strict';
console.log('hola');
//
var data = {};
var dataStorageRetrieved = [];

console.log(data);

var fr = new FileReader();

var inputStorage = document.querySelectorAll('.input__storage');

function useDataStorage(inputStorageName, inputStorageValue, inputStoragePosition) {
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

  if(inputStoragePosition.type === 'radio' && inputStoragePosition.value === data[inputStorageName] ){
    console.log('inputStoragePosition.type', inputStoragePosition.type);
    console.log('inputStoragePosition.value', inputStoragePosition.value);
    console.log('data[inputStorageName]', data[inputStorageName]);
    inputStoragePosition.checked = true;
  } else if(inputStoragePosition.type === 'file'){

    // inputStoragePosition.value = data[inputStorageName];
    // console.log('inputStoragePosition.value', inputStoragePosition.value);
    // console.log('data[inputStorageName]', data[inputStorageName]);
    //
  } else{
    inputStoragePosition.value = data[inputStorageName];
    console.log('inputStoragePosition.value', inputStoragePosition.value);
    console.log('data[inputStorageName]', data[inputStorageName]);

  }


}

function saveDataStorage(event) {
  //Variable para actual nombre del imput y valor del input
  var currentInput = event.currentTarget;
  console.log('current value', currentInput.value);
  console.log('current name', currentInput.name);
  var currentInputName = currentInput.name;
  var currentInputValue = currentInput.value;
  console.log('value y name',currentInputValue,currentInputName);
  if(currentInput.type === 'file'){
    var myFile = document.querySelector('#image').files[0];
    console.log('fottoooo', myFile);
    // fr.readAsDataURL(myFile);
    console.log('fr', fr);
    var frResult = fr.result;
    console.log('fr.result',frResult);
    console.log('foto despues asurl',myFile );
    data[currentInputName] = fr.result;
    console.log('result', FileReader.result);
    localStorage.setItem(currentInputName, fr.result);
    // console.log('foto despues asurl',fr.readAsDataURL(myFile) );

    // data[currentInputName] = currentInputValue;
  } else if (currentInput.type === 'radio'&& currentInput.checked === true){
    console.log('esta checked', currentInput.checked);
    data[currentInputName] = currentInputValue;
    console.log( 'currentInputValue', currentInputValue);
    console.log( 'data[currentInputName]', data[currentInputName]);
    localStorage.setItem(currentInputName,currentInputValue);
  }else {
    console.log('esta checked', currentInput.checked);
    console.log( 'currentInputValue', currentInputValue);
    console.log( 'ddata.currentInputName ', data.currentInputName );
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


  // inputStorage[i].addEventListener('change',saveDataStorage);
}
for (var j = 0; j < inputStorage.length; j++ ){
  inputStorage[j].addEventListener('change',saveDataStorage);
}
console.log('inputStorage al final del todo', inputStorage);
