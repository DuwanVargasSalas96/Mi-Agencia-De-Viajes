// Define variables
let slideIndex = 1;

// Call the function to show slides
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

/**
 * Function to show slides
 * @param {Integer} n 
 */
function showSlides(n) {
    // Define variables
    let i;
    let slides = document.getElementsByClassName("slide");
    
    console.log(slides);

    // Check if there are no slides
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}
