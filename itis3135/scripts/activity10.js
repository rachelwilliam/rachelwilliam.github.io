$(document).ready(function () {
    (new Image()).src = this;
    
    $("#image_list a").each(function () {
        // preload the image for each link
        let gallery = new Image();
        gallery.src = $(this).attr("href");
    });

    // set up the event handlers for each link
    $("#image_list a").click(function (evt) {
        let url = $(this).attr("href");
        $("#image").attr("src", url);

        let caption = $(this).attr("title");
        $("#caption").text(caption);

        // cancel the default action of each link
        evt.preventDefault();
    });


    // move the focus to the first link
    $("li:first-child a").focus();


}); // end ready