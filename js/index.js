const iconMenu = document.querySelector('.menu-icon');
const closeBody = document.querySelector('.header-close');
const menuBody = document.querySelector('.header-body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_close');
    });
}

if (closeBody) {
    closeBody.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_close');
    });
}