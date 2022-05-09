// bxslider used for the slideshow on the index page
$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: false,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0,
        moveSlides: 1,
        // enable captions
        captions: true,
        speed: 500,
        pager: true,
        pagerType: "short",
        pager_selector: "#trackpages"
    });
});