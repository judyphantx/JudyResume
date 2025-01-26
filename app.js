const menuToggle = document.querySelector('.navbar_toggle');
const menuLinks = document.querySelector('.navbar_menu');

menuToggle.addEventListener('click', function(){
    menuToggle.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});