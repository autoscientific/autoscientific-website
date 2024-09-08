var buttonLinks = document.querySelectorAll('.button a');
var logo = document.querySelector('.logo');
var searchIcon = document.getElementById('search-icon');
var navBar = document.getElementById('nav-bar-container');

window.addEventListener('scroll', function() {
    var textColor = window.scrollY > 100 ? 'black' : 'white';
    var backgroundColor = window.scrollY > 100 ? 'white' : 'transparent';
    var inversion = window.scrollY > 100 ? 'invert(100%)' : 'invert(0)';

    if (searchIcon) {
        searchIcon.style.filter = inversion;
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