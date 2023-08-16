// NAV BAR

(function () {
    var menu = document.querySelector('nav'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('menuFixo'); // > 0 ou outro valor desejado
        else menu.classList.remove('menuFixo');
    });
})();


// ABRIR MENU

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// FECHAR MENU

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);













//window.addEventListener('scroll', () => {
//    document.querySelector('nav').classList.toggle('window-scroll', window.scrolly > 0);
//})
