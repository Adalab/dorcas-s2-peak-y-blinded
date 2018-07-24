'use strict';
//get image
//FileReader es un constructor, como un lector de archivos
const fr = new FileReader();

const uploadBtn = document.querySelector('.item__button-file');
const fileField = document.querySelector('#image');
const profileImage = document.querySelector('.personal-image');
const miniImage = document.querySelector('.item-preview__img');

const getImage = e => {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
  console.log(`fr ${fr}`);
};

const writeImage = () => {
  profileImage.src = fr.result;
  miniImage.src = fr.result;
};

const fakeFileClick = () => {
  fileField.click();
};

fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);

//input name y role

const nameField = document.querySelector('.form-field--name');
const roleField = document.querySelector('.form-field--role');

const writeData = event => {
  const guiltyElement = event.currentTarget;
  const targetID = guiltyElement.getAttribute('data-donde');

  document.querySelector(`#${targetID}`).innerHTML = guiltyElement.value;
};

nameField.addEventListener('keyup', writeData);
roleField.addEventListener('keyup', writeData);

//redes sociales

const mailField = document.querySelector('.form-field--mail');
const telField = document.querySelector('.form-field--tel');
const linField = document.querySelector('.form-field--lin');
const ghField = document.querySelector('.form-field--gh');

const writeSocialMedia = event => {
  const guiltyElement = event.currentTarget;
  const targetID = guiltyElement.getAttribute('data-donde');
  const inputID = guiltyElement.getAttribute('id');
  const linkID = document.querySelector(`#${targetID}`);

  if (inputID==='email'){
    linkID.href = `mailto:${guiltyElement.value}`;
    linkID.title = guiltyElement.value;
    linkID.classList.remove('contact__link--inactive');
    linkID.classList.add('contact__link--active');
  } else if (inputID === 'phone'){
    linkID.href = `tel:${guiltyElement.value}`;
    linkID.title = guiltyElement.value;
    linkID.classList.remove('contact__link--inactive');
    linkID.classList.add('contact__link--active');
  } else if  (inputID === 'linkedin'){
    linkID.href = `https://linkedin.com/in/${guiltyElement.value}`;
    linkID.title = `https://linkedin.com/in/${guiltyElement.value}`;
    linkID.classList.remove('contact__link--inactive');
    linkID.classList.add('contact__link--active');
  } else if (inputID === 'github') {
    linkID.href = `https://github.com/${guiltyElement.value}`;
    linkID.title = `https://github.com/${guiltyElement.value}`;
    linkID.classList.remove('contact__link--inactive');
    linkID.classList.add('contact__link--active');
  }
};

mailField.addEventListener('change', writeSocialMedia);
telField.addEventListener('change', writeSocialMedia);
linField.addEventListener('change', writeSocialMedia);
ghField.addEventListener('change', writeSocialMedia);

// reset

const resetButton = document.querySelector('.button-reset');

const resetForm = () => {
  document.getElementById('form').reset();
  // paleta reset
  card.classList.remove('paleta-azul', 'paleta-roja', 'paleta-gris');
  card.classList.add('paleta-azul');
  // font reset
  cardInfo.classList.remove('font-card--comicsans', 'font-card--ubuntu', 'font-card--montserrat');
  cardInfo.classList.add('font-card--comicsans');
  // reset links
  const linkID = document.querySelectorAll('.contact-link');
  for (const link of linkID) {
    if (link.classList.contains('contact__link--active') === true) {
      link.classList.remove('contact__link--active');
      link.classList.add('contact__link--inactive');
      link.href = '';
      link.title = '';
    }
  }
  // reset nombre y role
  const nameFieldFilled = document.querySelector('#element-name');
  nameFieldFilled.innerHTML = 'nombre apellidos';
  const roleFieldFilled = document.querySelector('#element-role');
  roleFieldFilled.innerHTML = 'Front-end developer';

  //reset pic
  profileImage.src = './images/card-image.png';
  miniImage.src = 'http://placehold.it/29x29/ffffff/ffffff';

  // reset skills
  const skillBox = document.querySelector('.skills__list');
  skillBox.innerHTML = '';

  //reset selects
  const selectContainer = document.querySelector('.js__select-container');
  selectContainer.innerHTML = '<label class="item__label" for="abilities">Habilidades (máximo 3)</label>';
  addSelect();

  //Reset localStorage
  localStorage.clear();
};

resetButton.addEventListener('click', resetForm);
