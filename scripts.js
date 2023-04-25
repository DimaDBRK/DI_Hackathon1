const navMain = document.querySelector('.navbar');
const navToggle = document.querySelector('.main-nav-toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('navbar-opened');
  navToggle.classList.toggle('main-nav-toggle-opened');
});
