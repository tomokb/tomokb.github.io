'use strict';

// Add copyright date 
const copyright = document.querySelector('#copyright');
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const copyrightDate = document.createTextNode(currentYear);
copyright.appendChild(copyrightDate);


// Typing animation
function typewriter() {
    // Cursor Animation
    const introduction = document.querySelector('#introduction');
    const textCursor = '|';
    const textCursorNode = document.createTextNode(textCursor);
    introduction.appendChild(textCursorNode);


    let typing = false;

    function animateCursor() {
        let newDate = new Date();
        let secondsElapsed = newDate.getSeconds();
        // interval 0.6 seconds

        if (!typing) {
            requestAnimationFrame(animateCursor);
            textCursorNode.style.opacity = 1;
        }

    }

    function animateTyping() {
        typing = true;
        if (!finishedTyping) {
            typingID = requestAnimationFrame(animateTyping);
        } else { // finishedTyping 
            typing = false;
            //cancelAnimationFrame(typingID);
        }
    }

    
/*
    for (let i = 0; i < message.length; i++) {
        let text = document.createTextNode(message[i]);
        introduction.appendChild(text);
    }
    */



}

// If JS is loaded, browser is compatible
typewriter();
// else, default to normal intro text
