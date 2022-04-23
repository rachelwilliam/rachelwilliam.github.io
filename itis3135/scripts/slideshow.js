/*let slideIndex = 1;
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
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/


$(document).ready(function() {
  $("#slideshow a").each(function() {
    var url=$(this).attr("href");
    var caption=$(this).attr("title");

    var slideshowImage=new Image();
    slideshowImage.src=url;

    $(this).click(function(event) {
      $("#image").attr("src", url);
      $("#caption").text(caption);

      event.preventDefault();
    });
  });
 
$("li:nth-child(1) a").focus(); 
});