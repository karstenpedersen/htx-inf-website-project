
const navSlide = () => {
    const headerBurger: HTMLElement = document.querySelector('.burger') as HTMLElement;
    const headerMenu: HTMLElement = document.querySelector('.header-menu') as HTMLElement;
    const headerNavLinks = document.querySelectorAll<HTMLElement>('.nav-links li');
    const headerUser: HTMLElement = document.querySelector('.header-menu .profile-container') as HTMLElement;

    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle("active");
        
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
    });
}

navSlide();