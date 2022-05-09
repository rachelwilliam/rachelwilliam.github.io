// This contains the ajax method to get the information from the breedlist.json file and display the information there on the Breeds page
$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "breedlist.json",
        beforeSend: function () {
            $("#breed").html("Loading...");
        },
        timeout: 10000,
        // in case of an error
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        // when the method goes as planned
        success: function (data) {
            $("#breed").html("");
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#breed").append(
                        "<h3 style=\"color:#421242;\">" + value.breedname + "</h2>" +
                        "<p style=\"text-align:center;\">Average height: " + value.height + "</p>" +
                        "<p style=\"text-align:center;\">Average weight: " + value.weight + "</p>" +
                        "<p style=\"text-align:center;\">Average lifespan: " + value.lifespan + "</p>" +
                        "<br>"
                    );
                });
            });

        }
    });

});
