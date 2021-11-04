import {getData} from './main.js';

window.addEventListener('load', () => {
    const buttons = document.querySelectorAll('.technology-button');
    const technologyName = document.getElementById('technology-name');
    const technologyDescription = document.getElementById('technology-description');
    const technologyImg = document.getElementById('technology-img');

    buttons.forEach(async (button) => {
        let data = await getData();
        
        button.addEventListener('click', updateContent);

        // Make Launch Vehicle the default view when user goes to technology tab
        if (button.dataset.index === '0') {
            button.click();
        }

        function updateContent() {
            // Update active CSS styles
            buttons.forEach(button => {
                button.classList.remove('active-technology');
            });
            button.classList.add('active-technology');

            const index = button.dataset.index;

            // Get technology details from JSON file
            const name = data.technology[index].name;
            const description = data.technology[index].description;
            let img = data.technology[index].images.portrait;
            if (window.screen.width.valueOf() <= 768) {
                img = data.technology[index].images.landscape;
            }
            
            // Update DOM elements
            technologyName.innerText = `${name.toUpperCase()}`;
            technologyDescription.innerText = `${description}`;
            technologyImg.src = `${img}`;
        }
    });
});