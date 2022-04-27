const btnMenu = document.querySelector('#btn-menu');
const menuDesplegable = document.querySelector('.menu-desplegable');
const imgHamburguesa = document.querySelector('#btn-menu > img');

btnMenu.addEventListener('click', () => {


    setTimeout(() => {
        if (menuDesplegable.classList.contains('no-visible')) {


            menuDesplegable.classList.remove('no-visible');
            imgHamburguesa.setAttribute('src', './assets/images/icon-close.svg');
        } else {

            menuDesplegable.classList.add('no-visible');
            imgHamburguesa.setAttribute('src', './assets/images/icon-hamburger.svg');
        }
    }, 200);


})