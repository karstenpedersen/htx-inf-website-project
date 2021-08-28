var navigation = document.getElementsByClassName('slideshow')[0].getElementsByClassName('navigation')[0];
var images = document.getElementsByClassName('slideshow')[0].getElementsByClassName('image');
var dots = [];
var imageIndex = 0;

function updateSlideshow() {
    // Hide images
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
        dots[i].classList.remove("selected");
    }

    // Display selected image
    images[imageIndex].style.display = 'block';
    dots[imageIndex].classList.add("selected");

    // Cycle images
    imageIndex += 1;
    if (imageIndex > images.length - 1) {
        imageIndex = 0;
    } 

    setTimeout(updateSlideshow, 2500);
}

// Setup slideshows
while (navigation.firstChild) {
    navigation.removeChild(navigation.lastChild);
}

for (let i = 0; i < images.length; i++) {
    dots[i] = document.createElement("span");;
    navigation.appendChild(dots[i]);
}

updateSlideshow();