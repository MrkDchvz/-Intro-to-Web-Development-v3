const button = document.querySelector('.nav__button');
const nav = document.querySelector('.nav__list');

button.addEventListener('click', () => {
  button.classList.toggle('toggled');
  nav.classList.toggle('toggled');
})