// Backdrop
document.addEventListener('DOMContentLoaded', function() {
  const reviewsBtn = document.querySelector('.button');
  const modalCloseBtn = document.querySelector('.close-btn');
  const backdrop = document.querySelector('.backdrop');

  reviewsBtn.addEventListener('click', function() {
    backdrop.classList.add('is-open');
  });

  modalCloseBtn.addEventListener('click', function() {
    backdrop.classList.remove('is-open');
  });
});
// mobile menu
const menuBtn = document.querySelector('.mobil-menu-btn'); 
const mobileCloseBtn = document.querySelector('.close-btn.mobile-close');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', function() {
  mobileMenu.classList.add('is-open-mobile');
});

mobileCloseBtn.addEventListener('click', function() {
  mobileMenu.classList.remove('is-open-mobile');
});