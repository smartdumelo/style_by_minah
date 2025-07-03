const hamburgerContainer = document.querySelector('.hamburger-container');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburgerContainer.classList.toggle('active');
});