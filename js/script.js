const button = document.querySelector('#navbar-toggle');
const menu = document.querySelector('#navbar-menu');

button.addEventListener('click', () => {
    menu.classList.toggle('active');
});