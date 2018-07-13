'use strict';
var listOfChosenSelects = document.getElementsByTagName('select');
var submitButton = document.querySelector('#submit');
var responseURL = document.querySelector('.response');
var buttonTwitter = document.querySelector('.btn-twitter');
var linkTwitter = document.querySelector('.link-twitter');
var form = document.querySelector('#form');
var cardCreated = document.querySelector('.card-created');
var fr = new FileReader();
var twitterURL;

submitButton.addEventListener('click', loadPhoto);

function sendData () {

  var inputs = Array.from(form.elements);
  console.log(form.elements);
  var json = getJSONFromInputs(inputs);
  json.skills = [];
  console.log('json', json);
  for(var i = 0; i < listOfChosenSelects.length; i++) {
    json.skills.push(listOfChosenSelects[i].value);
    console.log('lista de selects elegidos', listOfChosenSelects);
  }
  json.photo = fr.result;
  console.log(json);
  sendRequest(json);
}

function loadPhoto(){
  var myFile = document.querySelector('#image').files[0];
  fr.addEventListener('load', sendData);
  fr.readAsDataURL(myFile);
}

function getJSONFromInputs(inputs){
  console.log('inputs', inputs);
  // return inputs.reduce(function (acc, val) {
  //   if(val.nodeName !== 'BUTTON')
  //     acc[val.name] = val.value;
  //   return acc;

  return inputs.reduce(function (acc, val) {
   console.log(val.nodeName);


   if (val.type==='radio' && val.checked===true) {
     acc[val.name] = val.value;
   }
   if ((val.nodeName !== 'BUTTON') && (val.nodeName !== 'FIELDSET') && (val.type!=='radio') ){
     acc[val.name] = val.value;
   }

   return acc;
  }, {});
}

function sendRequest(json){
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json'
    },
  })

    .then(function(resp) {
      console.log(resp);
      return resp.json(); })
    .then(function(result) {
      showURL(result); })
    .catch(function(error) { console.log(error); });
}

function showURL(result){
  if(result.success){
    console.log(result.cardURL);
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  }else{
    responseURL.innerHTML = 'ERROR:' + result.error;
  }

  twitterURL = result.cardURL;
}

function shareOnTwitter() {
  linkTwitter.href = 'https://twitter.com/intent/tweet?url=' + twitterURL + '&text=Acabo%20de%20crear%20mi%20tarjeta%20con%20Font%20Awesome%20de%20Peak-y-blinded&hashtags=WomenInTech';
}

buttonTwitter.addEventListener('click', shareOnTwitter);
