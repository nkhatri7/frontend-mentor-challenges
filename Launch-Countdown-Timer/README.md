# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

![](./design/completed-screenshots/completed-desktop.png)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/responsive-countdown-timer-built-with-vanilla-js-and-css-UgQqVbnTA)
- [Live Site URL](https://launch-countdown-timer-nkhatri7.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript

### What I learned

I learnt how to use the radial-graident() css function which was useful for styling the time blocks (it was really tricky and messy). Below is an example of how I used it in my code:

```css
.time {
  background: radial-gradient(circle at 0% 50%, var(--background-color) 7px, transparent 0),
              radial-gradient(circle at 100% 50%, var(--background-color) 7px, transparent 0);
}
```

### Continued development

I want to continue completing intermediate challenges, I will complete a few more intermediate challenges before moving onto the advanced challenges. Also, I can't seem to figure out how to do the card flipping from the middle so I'd like to figure out how to do that eventually.

## Author

- Frontend Mentor - [@nkhatri7](https://www.frontendmentor.io/profile/nkhatri7)
- LinkedIn - [Neil Khatri](https://www.linkedin.com/in/neilkhatri/)

## Acknowledgments

- The [edited version of the accepted solution of this thread](https://stackoverflow.com/questions/12694635/css3-curved-cutout-from-div) on StackOverflow was really helpful for figuring out how to cut curves into my div for the time block. I'm not sure if this is the most effective method but it worked in this scenario.
