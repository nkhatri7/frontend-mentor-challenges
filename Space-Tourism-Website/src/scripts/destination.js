window.addEventListener('load', () => {
    const tabs = document.querySelectorAll('.destination-tab');
    const image = document.getElementById('destination-img');
    const destinationName = document.getElementById('destination-name');
    const bodyText = document.getElementById('body-text');
    const avgDistance = document.getElementById('avg-distance');
    const travelTime = document.getElementById('travel-time');

    const destinations = ['Moon', 'Mars', 'Europa', 'Titan'];
    let index = 0;

    async function getData() {
        const response = await fetch('../../data.json');
        const data = await response.json();
        return data;
    }

    tabs.forEach(async (tab) => {
        let data = await getData();

        tab.addEventListener('click', updateContent);

        // Make Moon the default tab when user first goes to destination page
        if (tab.dataset.destination === 'Moon') {
            tab.click();
        }

        function updateContent() {
            // Update CSS active style
            tabs.forEach(tab => {
                tab.classList.remove('active-destination');
            });
            tab.classList.add('active-destination');

            // Get destination index
            for (let i = 0; i < destinations.length; i++) {
                if (tab.dataset.destination === destinations[i]) {
                    index = i;
                }
            }
            // Get destination info from JSON file
            const name = data.destinations[index].name;
            const imgSource = data.destinations[index].images.webp;
            const description = data.destinations[index].description;
            const distance = data.destinations[index].distance;
            const travel = data.destinations[index].travel;
            
            // Update HTML elements
            destinationName.innerText = `${name.toUpperCase()}`;
            image.src = imgSource;
            bodyText.innerText = `${description}`;
            avgDistance.innerText = `${distance.toUpperCase()}`;
            travelTime.innerText = `${travel.toUpperCase()}`;
        }
    });
});