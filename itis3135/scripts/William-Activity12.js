$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        moveSlides: 1,
        captions: true,
        speed: 3000,
        pager: true,
        pagerType: "short",
        pager_selector: "#id_pager"
    });
});