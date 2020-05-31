// Nav
let navClosed = true;

let toggleNav = () => {
    if(navClosed) {
        $('#nav').animate(
            {
               right: 35
            }, 420, 'swing');
    }
    else {
        $('#nav').animate(
            {
               right: -300
            }, 420, 'swing');
    }
    navClosed = !navClosed;
}//toggleNav

// Home page photo swap
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "flex";
}