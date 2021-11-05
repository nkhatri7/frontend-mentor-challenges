import {getData} from './main.js';

window.addEventListener('load', () => {
    const options = document.querySelectorAll('.option-circle');
    const roleElement = document.getElementById('role');
    const nameElement = document.getElementById('name');
    const bioElement = document.getElementById('bio');
    const imgElement = document.getElementById('crew-img');

    if (window.screen.width.valueOf() <= 768) {
        handleSwipeEvent();
    }

    options.forEach(option => {
        option.addEventListener('click', handleClick);

        // Make Douglas Hurley the default view when user goes to crew tab
        if (option.dataset.name === 'Douglas Hurley') {
            option.click();
        }

        function handleClick() {
            // Update active CSS style
            options.forEach(option => {
                option.classList.remove('active-option');
            });
            option.classList.add('active-option');

            const index = option.dataset.index;
            updateContent(index);
        }
    });

    function handleSwipeEvent() {
        // Adapted from https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
        const swipableArea = document.getElementById('main');
        swipableArea.addEventListener('touchstart', handleTouchStart, false);        
        swipableArea.addEventListener('touchmove', handleTouchMove, false);

        let xDown = null;                                                        
        let yDown = null;

        let index = 0;

        function getTouches(evt) {
            return evt.touches || evt.originalEvent.touches;
        }

        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];                                      
            xDown = firstTouch.clientX;                                      
            yDown = firstTouch.clientY;                                      
        }

        function handleTouchMove(evt) {
            if ( ! xDown || ! yDown ) {
                return;
            }
        
            const xUp = evt.touches[0].clientX;                                    
            const yUp = evt.touches[0].clientY;
        
            const xDiff = xDown - xUp;
            const yDiff = yDown - yUp;
            
            // If there is a horizontal swipe
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                // Confirming index in case user taps an option and then starts swiping
                options.forEach(option => {
                    if (option.classList.contains('active-option')) {
                        index = parseInt(option.dataset.index);
                    }
                });
                if ( xDiff > 0 ) {
                    // Right swipe
                    if (index <= 2) {
                        index++;
                    }    
                } else {
                    // Left swipe
                    if (index > 0) {
                        index--;
                    }
                }
                handleSwipeCSSChange(index);
                updateContent(index);                
            }
            xDown = null;
            yDown = null;                                             
        }
    }

    function handleSwipeCSSChange(index) {
        options.forEach(option => {
            option.classList.remove('active-option');
            if (parseInt(option.dataset.index) === index) {
                option.classList.add('active-option');
            }
        });
    }

    async function updateContent(index) {
        let data = await getData();

        // Get crew details from JSON file
        const role = data.crew[index].role;
        const name = data.crew[index].name;
        const bio = data.crew[index].bio;
        const img = data.crew[index].images.webp;

        // Update DOM elements
        roleElement.innerText = `${role.toUpperCase()}`;
        nameElement.innerText = `${name.toUpperCase()}`;
        bioElement.innerText = `${bio}`;
        imgElement.src = `${img}`;
    }
});