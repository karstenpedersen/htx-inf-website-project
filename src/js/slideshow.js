// Faa fat i sidens elementer.
const navigation = document.getElementsByClassName('slideshow')[0].getElementsByClassName('navigation')[0];
const images = Array.from(document.getElementsByClassName('slideshow')[0].getElementsByClassName('image'));
const imageContainer = document.getElementsByClassName('slideshow')[0].querySelector('.slide-content');
var dots = []; // Variabel til at holde 'dots'.
var imageIndex = 0; // Nuvaerende billed nummer.
/**
 * Opsaet slideshowet
 */
function setupSlideshow() {
    // Fjern alle children fra slideshowet.
    while (navigation.firstChild) {
        navigation.removeChild(navigation.firstChild);
    }
    // Loop gennem slideshowets billeder.
    for (let i = 0; i < images.length; i++) {
        // Opret 'dot'.
        let dot = document.createElement("span");
        // Giv elementet en klik event listener til at saette det viste billede.
        dot.addEventListener('click', () => {
            setSlide(i);
        });
        // Gem dotten.
        dots.push(dot);
        navigation.appendChild(dots[i]);
    }
    // Opdater til sidst slideshhowet.
    updateSlideshow();
}
/**
 * Opdatere slideshowet.
 */
function updateSlideshow() {
    // Set nuvarende slideshow billede.
    setSlide(imageIndex);
    // Koer gennem slideshowet.
    nextSlide();
    // Opsaet loop til at koer funktion igen.
    setTimeout(updateSlideshow, 4500);
}
/**
 * Gaa til sidste billede.
 */
function prevSlide() {
    imageIndex--;
    if (imageIndex < 0)
        imageIndex = images.length - 1;
}
/**
 * Gaa til naeste billede.
 */
function nextSlide() {
    imageIndex++;
    if (imageIndex > images.length - 1)
        imageIndex = 0;
}
/**
 * Set hvilket billede der bliver vist.
 * @param imageIndex Billedets nummer.
 */
function setSlide(imageIndex) {
    // Saet nuvarende billed nummer.
    this.imageIndex = imageIndex;
    // Gem alle billeder.
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
        dots[i].classList.remove("selected");
    }
    // Goer det nuvarende billede synligt.
    images[this.imageIndex].style.display = 'block';
    dots[this.imageIndex].classList.add("selected");
}
// Opsaet og start slideshowet.
setupSlideshow();
