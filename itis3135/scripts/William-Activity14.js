$(document).ready(function () {
    $("#nav_list li").click(function () {
        $.ajax({
            type: "get",
            url: "json_files/" + $(this).children("a").attr("title") + ".json",
            error: function (xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function (data) {
                $.each(data, function () {
                    $.each(this, function (key, value) {
                        $("main").text("");
                        $("main").append(
                            "<h1>" + value.title + "</h1>" +
                            "<img src=\"" + value.image + "\">" +
                            "<h2>" + value.month + "</h2>" +
                            "<h2>" + value.speaker + "</h2>" +
                            "<p>" + value.text + "</p>"
                        );
                    });
                });
            }
        });
    });
}); // end ready
