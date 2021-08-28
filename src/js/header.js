const navSlide = () => {
    const headerBurger = document.querySelector('.burger');
    const headerMenu = document.querySelector('.header-menu');
    const headerNavLinks = document.querySelectorAll('.nav-links li');
    const headerUser = document.querySelector('.header-menu .profile-container');
    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle("active");
        headerNavLinks.forEach((element, index) => {
            if (element.style.animation) {
                element.style.animation = '';
            }
            else {
                element.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
            }
        });
        if (headerUser.style.animation) {
            headerUser.style.animation = '';
        }
        else {
            headerUser.style.animation = `navLinkFade 0.5s ease forwards ${headerNavLinks.length / 5}s`;
        }
    });
};
navSlide();
