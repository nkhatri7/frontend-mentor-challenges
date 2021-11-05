const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const websiteNav = document.querySelector('.website-nav');

mobileNavToggle.addEventListener('click', () => {
    const visiblity = websiteNav.getAttribute('data-mobile-open');
    if (visiblity === "false") {
        websiteNav.setAttribute('data-mobile-open', true);
    } else {
        websiteNav.setAttribute('data-mobile-open', false);
    }
    mobileNavToggle.classList.toggle('mobile-nav-open');
});

export async function getData() {
    const response = await fetch('../../data.json');
    const data = await response.json();
    return data;
}