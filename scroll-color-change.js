window.addEventListener('scroll', function() {
    var navBar = document.getElementById('nav-bar');
    if (navBar) { // Check if the div actually exists
        if (window.scrollY > 100) {
            navBar.style.color = "black"
            navBar.style.backgroundColor = 'white';
        } else {
            navBar.style.color = "white"
            navBar.style.backgroundColor = 'transparent';
        }
    } else {
        console.error('Element with ID "nav-bar" not found.');
    }
});

var buttonLinks = document.querySelectorAll('.button a');
var logo = document.querySelector('.logo');
buttonLinks.forEach(function(link) {
    link.style.color = 'white'; // Example: changing the text color of all links
});

window.addEventListener('scroll', function() {
    if (buttonLinks) { // Check if the div actually exists
        if (window.scrollY > 100) {
            logo.style.color = 'black';
            buttonLinks.forEach(function(link) {
                link.style.color = 'black';
            });
        } else {
            logo.style.color = 'white';
            buttonLinks.forEach(function(link) {
                link.style.color = 'white';
            });
        }
    } else {
        console.error('Element with ID "nav-bar" not found.');
    }
});
