# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./src/assets/completed-screenshot/completed-desktop-home.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript

### What I learned

One of the main CSS skills I learnt was how to use the `:not` pseduo class. An example of how I used this in this challenge is seen below:

```css
.nav-link:not(.active-link):hover {
    border-bottom: 3px solid #979797;
}
```

### Continued development

This was a good challenge because it was a multi-page website, I want to continue working on more and more complex challenges like this one.

## Author

- Frontend Mentor - [@nkhatri](https://www.frontendmentor.io/profile/nkhatri)
- LinkedIn - [Neil Khatri](https://www.linkedin.com/in/neilkhatri/)

## Acknowledgments

I implemented a swipe feature on the crew page to improve the user experience for users on mobile and tablet. This would not have been possible without [@givanse's answer on this StackOverflow thread](https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android).
