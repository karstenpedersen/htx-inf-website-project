const navigation: HTMLElement = document.getElementsByClassName('slideshow')[0].getElementsByClassName('navigation')[0] as HTMLElement;
const images: HTMLElement[] = Array.from(document.getElementsByClassName('slideshow')[0].getElementsByClassName('image') as HTMLCollectionOf<HTMLElement>);
var dots: HTMLElement[] = [];
var imageIndex = 0;

function setupSlideshow() {
    while (navigation.firstChild) {
        navigation.removeChild(navigation.firstChild);
    }
    
    for (let i = 0; i < images.length; i++) {
        dots.push(document.createElement("span"));
        navigation.appendChild(dots[i]);
    }

    updateSlideshow();
}

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

    // Loop
    setTimeout(updateSlideshow, 2500);
}

// Setup slideshow
setupSlideshow();