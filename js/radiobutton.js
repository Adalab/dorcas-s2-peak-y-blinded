// paleta

var paleta1 = document.querySelector('#color1');
var paleta2 = document.querySelector('#color2');
var paleta3 = document.querySelector('#color3');
var card = document.querySelector('#card');
var cardInfo = document.querySelector('#card__info');

function changeColor(event) {
  var clickedPalette = event.currentTarget;
  var selectedPalette = clickedPalette.getAttribute('radio-cual');
  card.classList.remove('paleta-azul', 'paleta-roja', 'paleta-gris');
  if (selectedPalette === '1') {
    card.classList.add('paleta-azul');
  } else if (selectedPalette === '2') {
    card.classList.add('paleta-roja');
  } else if (selectedPalette === '3') {
    card.classList.add('paleta-gris');
  }
}

paleta1.addEventListener('click', changeColor);
paleta2.addEventListener('click', changeColor);
paleta3.addEventListener('click', changeColor);

// fuentes

var font1 = document.querySelector('#font1');
var font2 = document.querySelector('#font2');
var font3 = document.querySelector('#font3');

function changeFont (event) {
  var clickedFont = event.currentTarget;
  var selectedFont = clickedFont.getAttribute('radio-cual');
  cardInfo.classList.remove('font-card--comicsans', 'font-card--ubuntu', 'font-card--montserrat');

  if (selectedFont === '4') {
    cardInfo.classList.add('font-card--ubuntu');
  } else if (selectedFont === '5') {
    cardInfo.classList.add('font-card--comicsans');
  } else if (selectedFont === '6') {
    cardInfo.classList.add('font-card--montserrat');
  }
}

font1.addEventListener('click', changeFont);
font2.addEventListener('click', changeFont);
font3.addEventListener('click', changeFont);
