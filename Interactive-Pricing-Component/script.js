window.onload = function() {
    const slider = document.getElementById('pricing-slider');
    const pageviews = document.getElementById('pageviews');
    const price = document.getElementById('price');
    const billingPeriod = document.getElementById('billing-period');
    const toggle = document.getElementById('billing-toggle');

    const pageviewsArray = ['10K', '50K', '100K', '500K', '1M'];
    const monthlyPrices = [8, 12, 16, 24, 36];
    const yearlyPrices = [];

    monthlyPrices.forEach(price => yearlyPrices.push((price * 12 * 0.75)));

    toggle.addEventListener('change', function() {
        const index = getIndex();
        setPricing(index);
    });

    slider.oninput = function() {
        // Slider styling adapted from @dargue3 StackOverflow: https://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider
        let value = (this.value - this.min)/(this.max - this.min)*100;
        this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%, hsl(224, 65%, 95%) 100%)`;
        
        const index = getIndex();
        setPricing(index);
        pageviews.innerText = pageviewsArray[index];
    };

    function setPricing(index) {
        if (getBillingPeriod()) {
            billingPeriod.innerText = 'year'; 
            price.innerText = `$${yearlyPrices[index]}.00`;
        } else {
            billingPeriod.innerText = 'month';
            price.innerText = `$${monthlyPrices[index]}.00`;
        }
    }

    function getBillingPeriod() {
        if (toggle.checked) {
            return true;
        }
        return false;
    }

    function getIndex() {
        let value = slider.value;
        if (value === '0') {    
            return 0;
        } else if (value === '5') {
            return 1;
        } else if (value === '10') {
            return 2;
        } else if (value === '15') {
            return 3;
        } else {
            return 4;
        }
    }
}