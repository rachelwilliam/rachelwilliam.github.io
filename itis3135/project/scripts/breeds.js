$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "breedlist.json",
        beforeSend: function () {
            $("#breeds").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            $("#breeds").html("");
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#breeds").append(
                        "<h2>" + value.breedname + "</h2>" +
                        "<p>Average height: " + value.height + "</p>" +
                        "<p>Average weight: " + value.weight + "</p>" +
                        "<p>Average lifespan: " + value.lifespan + "</p>" +
                        "<br>"
                    );
                });
            });

        }
    });

});
