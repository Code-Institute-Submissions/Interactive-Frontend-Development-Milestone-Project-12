// var to set the slide index, initally set to display first slide
var slideIndex = 1;

// call function to show the slide
showSlides(slideIndex);

// function to increment/decrement the slide index when next/prev is clicked and call the showSlide function
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// function to set the slide index to the corresponding dot clicked and call showSlide function
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//function to display the slide for the slideindex passed
function showSlides(slideNumber) {
    var count;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (slideNumber > slides.length) {slideIndex = 1}    
    if (slideNumber < 1) {slideIndex = slides.length}
    for (count = 0; count < slides.length; count++) {
        slides[count].style.display = "none";  
    }
    for (count = 0; count < dots.length; count++) {
        dots[count].className = dots[count].className.replace(" dotActive", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " dotActive";
}