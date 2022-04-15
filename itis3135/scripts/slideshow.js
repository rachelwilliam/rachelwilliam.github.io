let slideindex = 1;
showslides(slideindex);

function plusslides(n) 
{
    showslides(slideindex += n);
}

function currentslide(n) 
{
    showslides(slideindex = n);
}

function showSlides(n) 
{
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) 
    {
        slideindex = 1
    }
    if (n < 1) 
    {
        slideindex = slides.length
    }
    for (i = 0; i < slides.length; i++) 
    {
      slides[i].style.display = "none";
    }
    slides[slideindex-1].style.display = "block";
}