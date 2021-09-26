const navigation = document.getElementsByClassName('slideshow')[0].getElementsByClassName('navigation')[0];
const images = Array.from(document.getElementsByClassName('slideshow')[0].getElementsByClassName('image'));
const imageContainer = document.getElementsByClassName('slideshow')[0].querySelector('.slide-content');
var dots = [];
var imageIndex = 0;
function setupSlideshow() {
    while (navigation.firstChild) {
        navigation.removeChild(navigation.firstChild);
    }
    for (let i = 0; i < images.length; i++) {
        imageContainer.addEventListener('dragover', (e) => {
            e = e || window.event;
            if (e.pageX < 0) {
                prevSlide();
            }
            else if (e.pageX > 0) {
                nextSlide();
            }
        });
        let dot = document.createElement("span");
        dot.addEventListener('click', () => {
            setSlide(i);
        });
        dots.push(dot);
        navigation.appendChild(dots[i]);
    }
    updateSlideshow();
}
function updateSlideshow() {
    // Set current slideshow
    setSlide(imageIndex);
    // Cycle images
    nextSlide();
    // Loop
    setTimeout(updateSlideshow, 4500);
}
function prevSlide() {
    imageIndex--;
    if (imageIndex < 0)
        imageIndex = images.length - 1;
}
function nextSlide() {
    imageIndex++;
    if (imageIndex > images.length - 1)
        imageIndex = 0;
}
function setSlide(imageIndex) {
    this.imageIndex = imageIndex;
    // Hide images
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
        dots[i].classList.remove("selected");
    }
    // Display selected image
    images[this.imageIndex].style.display = 'block';
    dots[this.imageIndex].classList.add("selected");
}
// Setup slideshow
setupSlideshow();
