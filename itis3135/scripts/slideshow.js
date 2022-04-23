
$(document).ready(function () {
  $("#slideshow a").each(function () {
    var url = $(this).attr("href");
    var caption = $(this).attr("title");

    var slideshowImage = new Image();
    slideshowImage.src = url;

    $(this).click(function (event) {
      $("#image").attr("src", url);
      $("#caption").text(caption);

      event.preventDefault();
    });
  });

  $("li:nth-child(1) a").focus();
});