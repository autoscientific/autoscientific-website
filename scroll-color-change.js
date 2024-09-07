var buttonLinks = document.querySelectorAll('.button a');
var logo = document.querySelector('.logo');

window.addEventListener('scroll', function() {
    var navBar = document.getElementById('nav-bar');
    var textColor = window.scrollY > 100 ? 'black' : 'white';
    var backgroundColor = window.scrollY > 100 ? 'white' : 'transparent';

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