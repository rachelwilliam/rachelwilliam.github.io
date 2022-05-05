$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: false,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0,
        slideWidth: 200,
        moveSlides: 1,
        captions: true,
        speed: 500,
        pager: true,
        pagerType: "short",
        pager_selector: "#id_pager"
    });
});