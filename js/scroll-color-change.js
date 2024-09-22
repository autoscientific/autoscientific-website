var buttonLinks = document.querySelectorAll('.nav__item a');
var logo = document.querySelector('.logo a');
var navBar = document.getElementById('nav-bar-standard');
var burgerIcon = document.getElementById('menu-toggle');

window.addEventListener('scroll', function() {
    var textColor = window.scrollY > 100 ? 'black' : 'white';
    var backgroundColor = window.scrollY > 100 ? 'white' : 'transparent';
    var butotnIconInversion = window.scrollY > 100 ? 'invert(0)' : 'invert(100%)';

    if (burgerIcon) {
        burgerIcon.style.filter = butotnIconInversion;
    }

    if (navBar) {
        navBar.style.color = textColor;
        navBar.style.backgroundColor = backgroundColor;
    } else {
        console.error('Element with ID "nav-bar" not found.');
    }

    if (buttonLinks) {
        logo.style.color = textColor;
        buttonLinks.forEach(function(link) {
            link.style.color = textColor;
        });
    }
});