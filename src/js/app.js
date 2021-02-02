const button = document.querySelector('.hamburger-col');
const sidebar = document.querySelector('.side-bar');
const close = document.querySelector('.menu-bottom');


button.addEventListener('click', function() {
  sidebar.classList.toggle('is-active');
});

close.addEventListener('click', function() {
  sidebar.classList.toggle('is-active');
});


