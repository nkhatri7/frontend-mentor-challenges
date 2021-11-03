import {getData} from './main.js';

window.addEventListener('load', () => {
    const options = document.querySelectorAll('.option-circle');
    const roleElement = document.getElementById('role');
    const nameElement = document.getElementById('name');
    const bioElement = document.getElementById('bio');
    const imgElement = document.getElementById('crew-img');

    options.forEach(async (option) => {
        let data = await getData();

        option.addEventListener('click', updateContent);

        // Make Douglas Hurley the default view when user goes to crew tab
        if (option.dataset.name === 'Douglas Hurley') {
            option.click();
        }

        function updateContent() {
            // Update active CSS style
            options.forEach(option => {
                option.classList.remove('active-option');
            });
            option.classList.add('active-option');

            const index = option.dataset.index;

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
});