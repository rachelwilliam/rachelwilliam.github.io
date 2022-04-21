$(document).ready(function () {
    (new Image()).src = this;

    $("#image_list a").each(function () {
        // preload the image for each link
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up the event handlers for each link
    $("#image_list a").click(function(evt) {
        var imageURL = $(this).attr("href");
        $("#image").attr("src", imageURL);

        var caption = $(this).attr("title");
        $("#caption").text(caption);

        // cancel the default action of each link
        evt.preventDefault();
    });


    // move the focus to the first link
    $("li:first-child a").focus();


}); // end ready