const parentElement = document.querySelector('.client-logos');

// list child elements
const childElements = Array.from(parentElement.children);

console.log(childElements[0]);

// get the first child element to apply styles
const firstChild = childElements[0];

// get the xy position of the first child element
const firstChildPosition = firstChild.getBoundingClientRect();

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function fadeInElement(element, fadeTime) {
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
            element.style.opacity = i / 100;
        }, i * fadeTime); // multiply delay by i to increment the delay
    }
};

// fade in each child element
function fadeInAll() {
    childElements.forEach((element) => {
        let randomTime = getRandomArbitrary(5, 20);
        let randomDelay = getRandomArbitrary(100, 1000);
        setTimeout(() => {
            fadeInElement(element, randomTime);
        }, randomDelay);
    });
};

let fadeHappened = false;


window.addEventListener('scroll', function() {
    // get vertical window size
    let windowSize = window.innerHeight;
    let positionQuery = window.scrollY + windowSize;

    if (positionQuery > firstChildPosition.top && !fadeHappened) {
        fadeInAll();
        fadeHappened = true;
    }
});