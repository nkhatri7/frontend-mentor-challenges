const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

let month = 12;
let year = 2021;

function countdown() {
    // Making sure date is in local time by using toString()
    const date = new Date(`${year}-01-${month}`).toLocaleDateString();
    const countdownDate = new Date(date);
    const currentDate = new Date();

    const totalSeconds = (countdownDate - currentDate) / 1000;
    console.log(totalSeconds);
    if (totalSeconds <= 0) {
        if (month === 12) {
            year++;
            month = 1;
            // Call function again so that the time changes straight away instead of going negative for a second
            return countdown();
        } else {
            month++;
            return countdown();
        }
    }

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial call
countdown();

// Call function every second
setInterval(countdown, 1000);