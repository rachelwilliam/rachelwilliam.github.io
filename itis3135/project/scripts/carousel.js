$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: false,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 20,
        moveSlides: 1,
        shrinkItems: true,
        captions: true,
        speed: 3000,
        pager: true,
        pagerType: "short",
        pager_selector: "#id_pager"
    });
});