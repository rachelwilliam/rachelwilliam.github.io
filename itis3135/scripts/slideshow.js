$(document).ready(function() 
{
    var picture;
    var caption;

    $("a").each(function () 
    {
        picture = $(this).attr("href");
        caption = $(this).attr("id");

        $("#title").text(caption);
        $("#img").attr("src",url);
        });
    });