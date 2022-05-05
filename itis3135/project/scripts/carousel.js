$(document).ready(function() {
    $("#slider").bxSlider({
        mode: 'vertical',
        randomStart: false,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0,
        moveSlides: 1,
        captions: true,
        speed: 3000,
        pager: true,
        pagerType: "short",
        pager_selector: "#id_pager"
    });
});