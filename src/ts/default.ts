// Faa fat i HTML elementer fra siden.
const header: HTMLElement = document.querySelector('header') as HTMLElement;
const headerBurger: HTMLElement = document.querySelector('.burger') as HTMLElement;
const headerMenu: HTMLElement = document.querySelector('.header-menu') as HTMLElement;
const headerNavLinks = document.querySelectorAll<HTMLElement>('.nav-links li');
const headerUser: HTMLElement = document.querySelector('.header-menu .profile-container') as HTMLElement;
const backToTopBtn: HTMLElement = document.querySelector('#button-back-to-top') as HTMLElement;

var previousScroll = window.scrollY;    // Gem hvor brugeren er scrollet til.
var backToTopButtonThreshold = 200;     // Threshold foer back-to-top-knap dukker op.

// Event Listeners
backToTopBtn.addEventListener('click', () => {
    // Scroll til toppen af siden.
    window.scrollTo({ top: 0, behavior: 'smooth'})
});

headerBurger.addEventListener('click', () => {
    // Toggle headeren i mobil tilstand.
    toggleMobileHeader();
});

/**
 * Koeres naar brugeren scroller op eller ned.
 */
window.onscroll = () => {
    // Tjek om headeren skal gemmes.
    if (window.scrollY > previousScroll && !headerBurger.classList.contains('active')) {
        toggleHeader('hide'); // Gem hvis man scroller ned.
    } else {
        toggleHeader('show'); // Vis hvis man scroller op.
    }

    // Gem nuvaerende scroll.
    previousScroll = window.scrollY;

    // Back to top knap.
    backToTopButtonHandler();
}

/**
 * Koeres naar vinduet goeres mindre eller stoere.
 */
window.onresize = () => {
    // Gem headeren hvis man gaar i mobil tilstand.
    if (window.innerWidth > 768) {
        toggleMobileHeader('hide');
    }

    // Back to top knap.
    backToTopButtonHandler();
}

// Methods
/**
 * Haandtere back-to-top knappen.
 */
function backToTopButtonHandler() {
    if (document.documentElement.scrollTop > backToTopButtonThreshold && window.innerWidth > 1168) {
        toggleBackToTopButton('show'); // Vis knappen.
    } else {
        toggleBackToTopButton('hide'); // Gem knappen.
    }
}

/**
 * Toggler back-to-top knappen.
 * @param option Kan være 'show', 'remove' eller ingenting.
 */
function toggleBackToTopButton(option = '') {
    if (option === 'show') {
        backToTopBtn.classList.remove('hide');
    } else if (option === 'hide') {
        backToTopBtn.classList.add('hide');
    } else {
        backToTopBtn.classList.toggle('hide');
    }
}

/**
 * Toggle headeren i mobiltilstand.
 * @param option Kan være 'show', 'hide' eller ingenting.
 */
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

/**
 * Toggle om headeren er synlig eller ej.
 * @param option Kan være 'show', 'hide' eller ingenting.
 */
function toggleHeader(option = '') {
    if (option === 'hide') {
        header.classList.add('hide');
    } else if (option === 'show') {
        header.classList.remove('hide');
    } else {
        header.classList.toggle('hide');
    }
}