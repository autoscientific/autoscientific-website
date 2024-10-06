const parentElement = document.querySelector('.client-logos');

// list child elements
const childElements = Array.from(parentElement.children);


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function fadeInElement(element, fadeTime) {
    element.style.opacity = 1;
    element.style.transition = `opacity ${fadeTime}s`;
};

// fade in each child element
function fadeInAll() {
    childElements.forEach((element) => {
        let randomTime = getRandomArbitrary(1, 3);
        let randomDelay = getRandomArbitrary(100, 1000);
        setTimeout(() => {
            fadeInElement(element, randomTime);
        }, randomDelay);
    });
};

const firstChildPosition = Math.round(childElements[0].getBoundingClientRect().top);
window.addEventListener('scroll', function() {
    // get vertical window size
    // get the xy position of the first child element
    
    let fadeHappened = false;
    let positionQuery = Math.round(window.scrollY);
    console.log(positionQuery, firstChildPosition);

    if ((positionQuery == firstChildPosition) && !fadeHappened) {
        fadeInAll();
        fadeHappened = true;
    }
    else {
        console.log('nope');
    }

    // if (positionQuery < firstChildPosition.top && fadeHappened) {
    //     console.log('reset');
    //     fadeHappened = false;
    //     childElements.forEach((element) => {
    //         element.style.opacity = 0;
    //     });

    // }
});