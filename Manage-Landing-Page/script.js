const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.nav-link');
const testimonials = document.querySelectorAll('.testimonial');
const testimonialIndicators = document.querySelectorAll('.testimonial-indicator');
const form = document.querySelector('.signup');
const emailEl = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

// Handle mobile navigation
menuToggle.addEventListener('click', handleMobileMenuToggle);
navLinks.forEach(navLink => {
    navLink.addEventListener('click', handleNavClick);
});

function handleMobileMenuToggle() {
    
    menuToggle.classList.toggle('menu-toggle-open');
    nav.classList.toggle('mobile-nav-open');
    overlay.classList.toggle('overlay-active');
    document.body.classList.toggle('no-scroll');
}

function handleNavClick() {
    menuToggle.classList.remove('menu-toggle-open');
    nav.classList.remove('mobile-nav-open');
    overlay.classList.remove('overlay-active');
    document.body.classList.remove('no-scroll');
}

if (window.screen.width.valueOf() < 768) {
    handleSwipeEvent();
}

// Handle swipe for testimonials (mobile)
function handleSwipeEvent() {
    // Adapted from https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
    const swipableArea = document.querySelector('.testimonials');
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
            // Confirming index
            testimonialIndicators.forEach(indicator => {
                if (indicator.classList.contains('active-indicator')) {
                    index = parseInt(indicator.dataset.index);
                }
            });
            
            if ( xDiff > 0 ) {
                // Right swipe
                if (index < 3) {
                    index++;
                }    
            } else {
                // Left swipe
                if (index > 0) {
                    index--;
                }
            }
            updateIndicator(index);
            updateTestimonialContent(index);                
        }
        xDown = null;
        yDown = null;                                             
    }

    function updateIndicator(index) {
        testimonialIndicators.forEach(indicator => {
            indicator.classList.remove('active-indicator');
            if (parseInt(indicator.dataset.index) === index) {
                indicator.classList.add('active-indicator');
            }
        });
    }

    function updateTestimonialContent(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active-testimonial');
            if (parseInt(testimonial.dataset.index) === index) {
                testimonial.classList.add('active-testimonial');
            }
        });
    }

    // Handle signup
    form.addEventListener('submit', (e) => {
        const email = emailEl.value;
        let valid = false;
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (email.trim() === "") {
            errorMessage.innerText = "Oops! Looks like you didn't enter anything.";
        } else if (!emailRegex.test(email.toLowerCase().trim())) {
            errorMessage.innerText = "Please insert a valid email.";
        } else {
            errorMessage.innerText = '';
            valid = true;
        }

        if (!valid) {
            emailEl.classList.add('email-invalid');
            e.preventDefault();
        }
    });
}