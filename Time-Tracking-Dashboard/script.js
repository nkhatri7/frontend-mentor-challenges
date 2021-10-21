window.addEventListener('load', () => {
    const URL = 'https://raw.githubusercontent.com/nkhatri7/Frontend-Mentor-Challenges/main/Time-Tracking-Dashboard/data.json';
    const currentHours = document.querySelectorAll('.hours');
    const previousHours = document.querySelectorAll('.previous-hours');
    const buttons = document.querySelectorAll('.time-period-button');

    // Get data from JSON file
    async function getData() {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }

    buttons.forEach(async (button) => {
        let data = await getData();

        button.addEventListener('click', updateHours);

        // Make weekly the default time period when user first visits page
        if (button.dataset.period === 'weekly') {
            button.click();
        }

        function updateHours() {
            // Update CSS active status
            buttons.forEach(button => {
                button.classList.remove('active-period');
            });
            button.classList.add('active-period');
            
            // Get time period (daily, weekly, monthly)
            const period = button.dataset.period;

            // Update DOM elements to display values from JSON file
            currentHours.forEach((current) => {
                const activity = data.find(({title}) => {
                    return title === current.dataset.activity;
                });
                if (activity.timeframes[period].current === 1) {
                    current.innerText = `${activity.timeframes[period].current}hr`;
                } else {
                    current.innerText = `${activity.timeframes[period].current}hrs`;
                }
            });

            previousHours.forEach((previous) => {
                const activity = data.find(({title}) => {
                    return title === previous.dataset.activity;
                })
                if (period == 'daily') {
                    if (activity.timeframes[period].previous === 1) {
                        previous.innerText = `Yesterday - ${activity.timeframes[period].previous}hr`;
                    } else {
                        previous.innerText = `Yesterday - ${activity.timeframes[period].previous}hrs`;
                    }
                    
                } else if (period == 'weekly') {
                    if (activity.timeframes[period].previous === 1) {
                        previous.innerText = `Yesterday - ${activity.timeframes[period].previous}hr`;
                    } else {
                        previous.innerText = `Yesterday - ${activity.timeframes[period].previous}hrs`;
                    }
                } else {
                    if (activity.timeframes[period].previous === 1) {
                        previous.innerText = `Yesterday - ${activity.timeframes[period].previous}hr`;
                    } else {
                        previous.innerText = `Yesterday - ${activity.timeframes[period].previous}hrs`;
                    }
                }
            });
        }
    });
});