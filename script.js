const increaseButton =document.querySelector('#increase-font');
const decreaseButton = document.querySelector('#decrease-font');
const content = document.querySelector('main');

let fontSize = 16;
const fontSizeIncrement = 2;

increaseButton.addEventListener('click', () => {
  fontSize += fontSizeIncrement;
  content.style.fontSize = fontSize + 'px';
});

decreaseButton.addEventListener('click', () => {
  fontSize -= fontSizeIncrement;
  content.style.fontSize = fontSize + 'px';
});