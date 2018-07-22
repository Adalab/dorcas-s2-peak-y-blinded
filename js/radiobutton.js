'use strict';
// paleta

const paleta1 = document.querySelector('#color1');
const paleta2 = document.querySelector('#color2');
const paleta3 = document.querySelector('#color3');
const card = document.querySelector('#card');
const cardInfo = document.querySelector('#card__info');

const changeColor = (event) => {
  const clickedPalette = event.currentTarget;
  const selectedPalette = clickedPalette.getAttribute('radio-cual');
  card.classList.remove('paleta-azul', 'paleta-roja', 'paleta-gris');
  if (selectedPalette === '1') {
    card.classList.add('paleta-azul');
  } else if (selectedPalette === '2') {
    card.classList.add('paleta-roja');
  } else if (selectedPalette === '3') {
    card.classList.add('paleta-gris');
  }
};

paleta1.addEventListener('click', changeColor);
paleta2.addEventListener('click', changeColor);
paleta3.addEventListener('click', changeColor);

// fuentes

const font1 = document.querySelector('#font1');
const font2 = document.querySelector('#font2');
const font3 = document.querySelector('#font3');

const changeFont = (event) => {
  const clickedFont = event.currentTarget;
  const selectedFont = clickedFont.getAttribute('radio-cual');
  cardInfo.classList.remove('font-card--comicsans', 'font-card--ubuntu', 'font-card--montserrat');

  if (selectedFont === '4') {
    cardInfo.classList.add('font-card--ubuntu');
  } else if (selectedFont === '5') {
    cardInfo.classList.add('font-card--comicsans');
  } else if (selectedFont === '6') {
    cardInfo.classList.add('font-card--montserrat');
  }
};

font1.addEventListener('click', changeFont);
font2.addEventListener('click', changeFont);
font3.addEventListener('click', changeFont);
