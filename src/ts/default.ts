const header: HTMLElement = document.querySelector('header') as HTMLElement;
const headerBurger: HTMLElement = document.querySelector('.burger') as HTMLElement;
const headerMenu: HTMLElement = document.querySelector('.header-menu') as HTMLElement;
const headerNavLinks = document.querySelectorAll<HTMLElement>('.nav-links li');
const headerUser: HTMLElement = document.querySelector('.header-menu .profile-container') as HTMLElement;

const backToTopBtn: HTMLElement = document.querySelector('#button-back-to-top') as HTMLElement;

var previousScroll = window.scrollY;
var backToTopButtonThreshold = 200;

// Event Listeners
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
});

headerBurger.addEventListener('click', () => {
    toggleMobileHeader();
});

// Override 
window.onscroll = () => {
    // Header
    if (window.scrollY > previousScroll && !headerBurger.classList.contains('active')) {
        toggleHeader('hide');
    } else {
        toggleHeader('show');
    }

    previousScroll = window.scrollY;

    // Back to top button
    backToTopButtonHandler();
}

window.onresize = () => {
    // Header
    if (window.innerWidth > 768) {
        toggleMobileHeader('hide');
    }

    // Back to top button
    backToTopButtonHandler();
}

// Methods
// Back to top button handler function
function backToTopButtonHandler() {
    if (document.documentElement.scrollTop > backToTopButtonThreshold && window.innerWidth > 1168) {
        toggleBackToTopButton('show');
    } else {
        toggleBackToTopButton('hide');
    }
}

function toggleBackToTopButton(option = '') {
    if (option === 'show') {
        backToTopBtn.classList.remove('hide');
        console.log('remove');
    } else if (option === 'hide') {
        backToTopBtn.classList.add('hide');
        console.log('add');
    } else {
        backToTopBtn.classList.toggle('hide');
        console.log('toggle');
    }
}

// Toggle mobile header and animation
function toggleMobileHeader(option = '') {
    var isActive = headerBurger.classList.contains('active');

    if (option === 'show') {
        headerBurger.classList.add('active');
        headerMenu.classList.add("active");
    } else if (option === 'hide') {
        headerBurger.classList.remove('active');
        headerMenu.classList.remove("active");
    } else {
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle("active");
    }
    
    if (isActive != headerBurger.classList.contains('active')) {
        headerNavLinks.forEach((element, index) => {
            if (element.style.animation) {
                element.style.animation = '';
            } else {
                element.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
            }
        });
    
        if (headerUser.style.animation) {
            headerUser.style.animation = '';
        } else {
            headerUser.style.animation = `navLinkFade 0.5s ease forwards ${headerNavLinks.length / 5}s`;
        }
    }
}

// Toggle header visibility
function toggleHeader(option = '') {
    if (option === 'hide') {
        header.classList.add('hide');
    } else if (option === 'show') {
        header.classList.remove('hide');
    } else {
        header.classList.toggle('hide');
    }
}