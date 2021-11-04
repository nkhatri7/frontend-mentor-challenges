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
        // Lifted from https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
        document.addEventListener('touchstart', handleTouchStart, false);        
        document.addEventListener('touchmove', handleTouchMove, false);

        var xDown = null;                                                        
        var yDown = null;

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
        
            var xUp = evt.touches[0].clientX;                                    
            var yUp = evt.touches[0].clientY;
        
            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;
                                                                                
            if (Math.abs( xDiff ) > Math.abs( yDiff )) {
                if ( xDiff > 0 ) {
                    // right swipe
                    if (index <= 2) {
                        index++;
                    }

                    // Update active CSS style
                    options.forEach(option => {
                        option.classList.remove('active-option');
                        if (parseInt(option.dataset.index) === index) {
                            option.classList.add('active-option');
                        }
                    });

                    updateContent(index);
                } else {
                    // left swipe
                    if (index > 0) {
                        index--;
                    }

                    // Update active CSS style
                    options.forEach(option => {
                        option.classList.remove('active-option');
                        if (parseInt(option.dataset.index) === index) {
                            option.classList.add('active-option');
                        }
                    });

                    updateContent(index);
                }                       
            }
            xDown = null;
            yDown = null;                                             
        }

        updateContent(index);
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