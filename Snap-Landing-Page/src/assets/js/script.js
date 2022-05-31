const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const dropdownItems = document.querySelectorAll('.inner-nav-item-container');
const dropdownArrows = document.querySelectorAll('.nav-item-arrow');
const nestedNavLists = document.querySelectorAll('.nested-list');
const navLinks = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-btn-open');
    nav.classList.toggle('mobile-nav-open');
    overlay.classList.toggle('overlay-active');
    document.body.classList.toggle('no-scroll');
});

dropdownItems.forEach((dropDownItem) => {
    dropDownItem.addEventListener('click', () => {
        dropdownArrows.forEach((dropDownArrow) => {
            if (dropDownArrow.dataset.navItem === dropDownItem.dataset.navItem) {
                dropDownArrow.classList.toggle('nav-item-arrow-open');
            } else {
                dropDownArrow.classList.remove('nav-item-arrow-open');
            }
        });
        nestedNavLists.forEach((nestedNavList) => {
            if (nestedNavList.dataset.navItem === dropDownItem.dataset.navItem) {
                nestedNavList.classList.toggle('nested-list-open');
            } else {
                nestedNavList.classList.remove('nested-list-open');
            }
        })
    });
});

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        menuBtn.classList.remove('menu-btn-open');
        nav.classList.remove('mobile-nav-open');
        overlay.classList.remove('overlay-active');
        document.body.classList.remove('no-scroll');
    });
});