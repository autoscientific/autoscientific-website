const buttonLinks = document.querySelectorAll('.nav__item a');
const logo = document.querySelector('.logo a');
const navBar = document.getElementById('nav-bar-standard');
const burgerIcon = document.getElementById('menu-toggle');

window.addEventListener('scroll', function() {
    const textColor = window.scrollY > 100 ? 'black' : 'white';
    const backgroundColor = window.scrollY > 100 ? 'white' : 'transparent';
    const buttonIconInversion = window.scrollY > 100 ? 'invert(0)' : 'invert(100%)';

    if (burgerIcon) {
        burgerIcon.style.filter = buttonIconInversion;
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
